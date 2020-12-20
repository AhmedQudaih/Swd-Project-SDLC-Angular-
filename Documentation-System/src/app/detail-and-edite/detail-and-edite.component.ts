import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { DocData } from '../doc-data';

@Component({
  selector: 'app-detail-and-edite',
  templateUrl: './detail-and-edite.component.html',
  styleUrls: ['./detail-and-edite.component.css']
})
export class DetailAndEditeComponent implements OnInit {
  Phase:number=0;
    Details:any = "0";
    Edite:any = "0";
 

  constructor(private dataService: DataService) {
      this.Details = this.dataService.Details;
      if(this.dataService.Details.PhaseType == "reqPhase"){
        this.Phase = 1;
      }
      if(this.dataService.Details.PhaseType == "charPhase"){
        this.Phase = 2;
      }
      if(this.dataService.Details.PhaseType == "desPhase"){
        this.Phase = 3;
      }
   }

  ngOnInit(): void {
  }

  Delete(Data:any){
    console.log(Data);
    this.dataService.Delete(Data);
    this.FormSubmet();
  }

  EditeData(Data:any){
    this.Phase = 0;
    this.dataService.Edite = 1;
    this.Edite = Data;
  }

  checkvalidation(){
    let count:Number=0;
    switch (this.Edite.PhaseType) {
      case 'reqPhase':
        if(
        this.Edite.reqPhase.introduction ==''||
        this.Edite.reqPhase.intended ==''||
        this.Edite.reqPhase.overall ==''||
        this.Edite.reqPhase.purpose ==''||
        this.Edite.reqPhase.sfr ==''||
        this.Edite.reqPhase.Url ==''){
          count = 1;
        }
        break;
      case 'charPhase':
        if(
        this.Edite.charPhase.title ==''||
        this.Edite.charPhase.start_date ==''||
        this.Edite.charPhase.finish_date ==''||
        this.Edite.charPhase.objectives ==''||
        this.Edite.charPhase.manager ==''||
        this.Edite.charPhase.budget_info ==''||
        this.Edite.charPhase.scope_statment ==''){
          count = 1;
        }
        break;
        case 'desPhase':
          if(
          this.Edite.desPhase.fileName ==''){
            count = 1;
          }
          break;
    }
   if (count != 0) {
      alert('Some fields are empty!!');
       this.EditeData(this.Edite);     
    }else{
      this.FormSubmet();
  }
}

  FormSubmet(){
 
    this.Edite = "0"
    this.dataService.Edite = 0;
    this.Details = "0"
    this.dataService.Details = "0";
     
  }

  BrowseImage(event: any){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        if(this.Edite.PhaseType=='reqPhase'){
        this.Edite.reqPhase.Url= event.target.result;
      }else{ this.Edite.desPhase.Url= event.target.result;  }
      }
    }
  }
  

  CheckComponant(){
    if(document.URL =='http://localhost:4200/allfile'){
      return 0;
    }else return 1;
  }

}


