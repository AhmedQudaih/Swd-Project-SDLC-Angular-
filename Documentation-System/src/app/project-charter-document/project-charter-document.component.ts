import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { DocData } from '../doc-data';

@Component({
  selector: 'app-project-charter-document',
  templateUrl: './project-charter-document.component.html',
  styleUrls: ['./project-charter-document.component.css']
})
export class ProjectCharterDocumentComponent implements OnInit {
  CharForm;
  displayform = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder , private dataService: DataService) {
    this.CharForm = this.formBuilder.group({
      title: ['',Validators.required],
      start_date: ['',Validators.required],
      finish_date: ['',Validators.required],
      objectives: ['',Validators.required],
      manager: ['',Validators.required],
      budget_info: ['',Validators.required],
      scope_statment:['',Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  
  get CharFormControl() {
    return this.CharForm.controls;
  }

  onSubmit(FormData: any) { 
    this.submitted = true;
    if (this.CharForm.valid) {
    let data: DocData = {PhaseType:'charPhase' ,charPhase:{
      title:"",
      start_date :"",
      finish_date :"",
      objectives:"",
      manager:"",
      budget_info:"",
      scope_statment:"",
    }};
    this.CharForm.reset();
    if(data.charPhase){
    data.charPhase.title = FormData.title;
    data.charPhase.start_date = FormData.start_date;
    data.charPhase.finish_date = FormData.finish_date;
    data.charPhase.objectives = FormData.objectives;
    data.charPhase.manager = FormData.manager;
    data.charPhase.budget_info = FormData.budget_info;
    data.charPhase.scope_statment = FormData.scope_statment;
    this.dataService.Savedata(data);
    this.dataService.PhaseListVal = 0;
    }

  }
  }

}
