import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { DocData } from '../doc-data';

@Component({
  selector: 'app-requirement-phase',
  templateUrl: './requirement-phase.component.html',
  styleUrls: ['./requirement-phase.component.css']
})
export class RequirementPhaseComponent implements OnInit {  
  ReqForm;
  displayform = false;
  submitted = false;
  url='';

  constructor(private formBuilder: FormBuilder , private dataService: DataService) {
     this.ReqForm = this.formBuilder.group({
    introduction: ['',Validators.required],
    purpose:  ['',Validators.required],
    intended:  ['',Validators.required],
    overall:  ['',Validators.required],
    sfr: ['',Validators.required],
    pic: ['',Validators.required]
  }); }

  ngOnInit(): void {
  }

  get ReqFormControl() {
    return this.ReqForm.controls;
  }


  onSubmit(FormData:any) {
    this.submitted = true;
    if (this.ReqForm.valid) {
    let data: DocData = {PhaseType:'reqPhase' ,reqPhase:{ introduction:'',
    purpose:'',
    intended:'',
    overall:'',
    Url:'',
    sfr:''
    }};
    this.ReqForm.reset();
    if(data.reqPhase){
    data.reqPhase.introduction = FormData.introduction;
    data.reqPhase.intended = FormData.intended;
    data.reqPhase.overall = FormData.overall;
    data.reqPhase.purpose = FormData.purpose;
    data.reqPhase.sfr = FormData.sfr;
    data.reqPhase.Url = this.url;
    this.dataService.Savedata(data);
    this.dataService.PhaseListVal = 0;
    }      
  }
  }


  BrowseImage(event: any){
    if(event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

}
