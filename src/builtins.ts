import type {NativeSkill} from './types.js';

const skill=(id:string,name:string,category:NativeSkill['manifest']['category'],description:string,triggers:string[],permissions:NativeSkill['manifest']['permissions']):NativeSkill=>({
 manifest:{id,name,version:'1.0.0',description,author:'AURA Team',category,tags:triggers,permissions,triggers,enabled:true},
 hooks:{onUserMessage:async(input)=>({success:true,output:`${name} matched this request.`,metadata:{skill:id,input}}),onCommand:async(command,args)=>({success:true,output:`${name}: ${command} ${args.join(' ')}`})}
});

export const builtInSkills:NativeSkill[]=[
 skill('code-analysis','Code Analysis','development','Analyze code for bugs, security, performance and maintainability',['analyze code','code review','review code'],[{type:'filesystem',scope:['read']} ,{type:'model',scope:['analysis']}]),
 skill('git','Git','development','Native Git workflow assistance',['git','commit','branch','merge','rebase'],[{type:'shell',scope:['git']} ,{type:'filesystem',scope:['read','write']}]),
 skill('github','GitHub','development','Repository, issue and pull request workflows',['github','pull request','repository','issue'],[{type:'network',scope:['github']} ,{type:'api',scope:['github']}]),
 skill('filesystem','Filesystem','system','Workspace file operations',['file','folder','directory','workspace'],[{type:'filesystem',scope:['read','write']}]),
 skill('terminal','Terminal','system','Controlled shell command execution',['terminal','shell','command','run'],[{type:'shell',scope:['execute']}]),
 skill('testing','Testing','development','Run and interpret automated tests',['test','tests','testing','coverage'],[{type:'shell',scope:['test']} ,{type:'filesystem',scope:['read']}]),
 skill('documentation','Documentation','development','Generate and maintain project documentation',['documentation','readme','docs','api docs'],[{type:'filesystem',scope:['read','write']},{type:'model',scope:['generation']}]),
 skill('data-analysis','Data Analysis','analysis','Analyze datasets and produce insights',['data analysis','csv','dataset','statistics','visualize'],[{type:'filesystem',scope:['read','write']},{type:'shell',scope:['python']},{type:'model',scope:['analysis']}]),
 skill('security-audit','Security Audit','security','Security scanning and threat analysis',['security audit','vulnerability','security scan','threat model'],[{type:'shell',scope:['security']} ,{type:'filesystem',scope:['read']} ,{type:'api',scope:['sentinel']}]),
 skill('automation','Automation','productivity','Build and execute repeatable workflows',['automate','automation','workflow','pipeline'],[{type:'shell',scope:['execute']},{type:'filesystem',scope:['read','write']},{type:'api',scope:['forge']}]),
 skill('research','Web Research','web','Structured research and source synthesis',['research','search web','find online','look up'],[{type:'network',scope:['web']},{type:'model',scope:['research']}])
];
