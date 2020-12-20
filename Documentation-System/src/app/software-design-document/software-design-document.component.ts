import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { DocData } from '../doc-data';

@Component({
  selector: 'app-software-design-document',
  templateUrl: './software-design-document.component.html',
  styleUrls: ['./software-design-document.component.css']
})
export class SoftwareDesignDocumentComponent implements OnInit {
DesForm;
displayform = false;
submitted = false;
Url:string[] = [];
NumOfinp:string[] = [""];


constructor(private formBuilder: FormBuilder , private dataService: DataService) { this.DesForm = this.formBuilder.group({
  fileName:['',Validators.required],
  Url:['',Validators.required]
}); }
  

  ngOnInit(): void {
  }

  
  get DesFormControl() {
    return this.DesForm.controls;
  }
 
  onSubmit() {
    this.submitted = true;
    if (this.DesForm.valid) {
    for (let index = 0; index < this.NumOfinp.length; index++) {
      let data: DocData = {PhaseType:'desPhase' ,desPhase:{ fileName:'',
      Url:''
      }};
    if(data.desPhase){
      data.desPhase.fileName =(document.getElementById("filename"+ index) as HTMLFormElement).value;
      data.desPhase.Url = this.Url[index];
      this.dataService.Savedata(data);
      this.dataService.PhaseListVal = 0;
    }
    }
    this.DesForm.reset();
  }
    
  }
  addInput(){
    this.NumOfinp.push(" ");
  }
  BrowseImage(event: any , id:number){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.Url[id] = event.target.result;
      }
    }
  }
}



