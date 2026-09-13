export type SkillCategory = 'productivity'|'development'|'security'|'analysis'|'utility'|'ai'|'custom'|'system'|'web';
export type PermissionType = 'filesystem'|'network'|'shell'|'api'|'database'|'model'|'memory';
export type ActionType = 'message'|'tool_call'|'navigation'|'notification'|'memory'|'task';

export interface SkillPermission { type: PermissionType; scope: string[]; description?: string; }
export interface SkillManifest {
  id:string; name:string; version:string; description:string; author:string;
  category:SkillCategory; tags:string[]; permissions:SkillPermission[];
  entryPoint?:string; enabled?:boolean; configSchema?:Record<string,unknown>;
  defaultConfig?:Record<string,unknown>; triggers?:string[]; priority?:number;
}
export interface SkillContext {
  userInput:string; history:Array<{role:string;content:string}>; memories:string[];
  currentModel:string; timestamp:number; workspace:string; config:Record<string,unknown>;
  services:Record<string,{url:string;available:boolean}|undefined>;
}
export interface SkillAction { type:ActionType; payload:unknown; }
export interface SkillResult { success:boolean; output?:string; data?:unknown; actions?:SkillAction[]; error?:string; metadata?:Record<string,unknown>; }
export interface SkillHooks {
  onInit?:(context:SkillContext)=>Promise<void>|void;
  onUserMessage?:(input:string,context:SkillContext)=>Promise<SkillResult|null>|SkillResult|null;
  onAssistantResponse?:(response:string,context:SkillContext)=>Promise<SkillResult|null>|SkillResult|null;
  onCommand?:(command:string,args:string[],context:SkillContext)=>Promise<SkillResult|null>|SkillResult|null;
  onInterval?:(context:SkillContext)=>Promise<SkillResult|null>|SkillResult|null;
  onShutdown?:(context:SkillContext)=>Promise<void>|void;
  onConfigChange?:(config:Record<string,unknown>,context:SkillContext)=>Promise<void>|void;
}
export interface NativeSkill { manifest:SkillManifest; hooks:SkillHooks; }
