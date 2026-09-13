import type {NativeSkill,SkillContext,SkillManifest,SkillResult,PermissionType} from './types.js';

export class PermissionGate {
  constructor(private readonly allow = new Map<PermissionType,Set<string>>()) {}
  check(skill:SkillManifest, requested:PermissionType, scope:string):boolean {
    const declared=skill.permissions.find(p=>p.type===requested);
    if(!declared || !declared.scope.some(s=>s==='*'||s===scope)) return false;
    const allowed=this.allow.get(requested); if(!allowed) return true;
    return allowed.has('*') || allowed.has(scope);
  }
}

export class NativeSkillRuntime {
  private skills=new Map<string,NativeSkill>();
  private context?:SkillContext;
  constructor(private readonly permissions=new PermissionGate()) {}

  register(skill:NativeSkill):void {
    if(this.skills.has(skill.manifest.id)) throw new Error(`Skill already registered: ${skill.manifest.id}`);
    this.skills.set(skill.manifest.id,skill);
    if(this.context && skill.manifest.enabled!==false) void skill.hooks.onInit?.(this.context);
  }
  registerMany(skills:NativeSkill[]):void { for(const skill of skills) this.register(skill); }
  unregister(id:string):boolean{return this.skills.delete(id);}
  get(id:string):NativeSkill|undefined{return this.skills.get(id);}
  list(enabledOnly=false):SkillManifest[]{return [...this.skills.values()].filter(s=>!enabledOnly||s.manifest.enabled!==false).map(s=>s.manifest);}
  initialize(context:SkillContext):void {this.context=context; for(const s of this.skills.values()) if(s.manifest.enabled!==false) void s.hooks.onInit?.(context);}
  async processUserMessage(input:string):Promise<SkillResult[]> {
    if(!this.context)return [];
    const ranked=[...this.skills.values()].filter(s=>s.manifest.enabled!==false).sort((a,b)=>(b.manifest.priority??0)-(a.manifest.priority??0));
    const out:SkillResult[]=[];
    for(const s of ranked){
      if(s.manifest.triggers?.length && !s.manifest.triggers.some(t=>input.toLowerCase().includes(t.toLowerCase()))) continue;
      try{const r=await s.hooks.onUserMessage?.(input,{...this.context,userInput:input});if(r)out.push(r);}catch(e){out.push({success:false,error:e instanceof Error?e.message:String(e),metadata:{skill:s.manifest.id}});}
    }
    return out;
  }
  async processCommand(command:string,args:string[]):Promise<SkillResult[]> {
    if(!this.context)return [];
    const out:SkillResult[]=[];
    for(const s of this.skills.values()) if(s.manifest.enabled!==false) try{const r=await s.hooks.onCommand?.(command,args,this.context);if(r)out.push(r);}catch(e){out.push({success:false,error:String(e),metadata:{skill:s.manifest.id}})}
    return out;
  }
  async shutdown():Promise<void>{if(!this.context)return;for(const s of this.skills.values())await s.hooks.onShutdown?.(this.context);this.context=undefined;}
  canUse(skillId:string,type:PermissionType,scope:string):boolean{const s=this.skills.get(skillId);return !!s&&this.permissions.check(s.manifest,type,scope);}
}
