
export type TClientStatus = "unknown"|"new"|"current"|"neither";


export interface IMessage {
name:string,
email:string,
phone:string,
message:string,
status:string,
// isRead:boolean
}

export interface IContactData {
    id:number,
   text: string;
   type: string;
   data: string;
   icon: string ;
 }
 