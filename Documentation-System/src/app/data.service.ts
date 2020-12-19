import { Injectable } from '@angular/core';
import { DocData } from './doc-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: DocData[] = [];
  Details:any ="0";
  Edite:Number =0;
  PhaseListVal: number = 0;
  count:number=0;
  constructor() { }

  Savedata(formData : DocData){
    this.count ++;
    formData.id = this.count;
    this.data.push(formData);
  }

  CloseDetails(){
    if(this.Edite == 0){
    this.Details ="0";
    }else{
      alert('To Exit Press on Done Button!!');
    }

  }
  Getdata(){
    return this.data;
  }
 
  Delete(Data:any){
    this.data.splice( this.data.findIndex( i => i.id = Data.id ), 1);
  }

}
