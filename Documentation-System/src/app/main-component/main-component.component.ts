import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { DataService } from '../data.service';
import { DocData } from '../doc-data';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  PhaseList = 0;
  
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  GetPhaseList(){
    this.PhaseList= 1;
  }


  SetPhaseListValue(value: any){
    this.dataService.PhaseListVal = value.value;
  }
  
  GetPhaseListValue(){
    return this.dataService.PhaseListVal;
  }

  Details(){ 
  
    return this.dataService.Details;
    
  }
  ExsitDetails(){ 
    
     this.dataService.CloseDetails();
     
  }
  
  links(){
    return this.dataService.Linkdisable();
  }


 
}
