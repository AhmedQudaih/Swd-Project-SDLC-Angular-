export interface DocData {
   id?:number;
   PhaseType:string;
 reqPhase?:{
    introduction:string ;
    purpose:string;
    intended:string;
    overall:string;
    Url:string;
    sfr:string;

 },
 charPhase?:{
    title:string;
    start_date :string;
    finish_date :string;
    objectives:string;
    manager:string;
    budget_info:string;
    scope_statment:string;
},
desPhase?:{
   fileName:string;
   Url:string;
}
}
