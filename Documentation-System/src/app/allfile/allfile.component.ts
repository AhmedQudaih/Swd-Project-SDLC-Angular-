import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allfile',
  templateUrl: './allfile.component.html',
  styleUrls: ['./allfile.component.css']
})
export class AllfileComponent implements OnInit {
  data:any[]=[];
  details:any ="0";
  constructor(private dataService:DataService) { 
    this.datahandler();
  }

  datahandler(){

     this.dataService.Getdata().forEach(element => {
    if(element.reqPhase){
        this.data.push(element);
      } 
      if (element.desPhase) {
        this.data.push(element);
      }
     
    }); 
    console.log(this.data);
  }

  ngOnInit(): void {
  }

  Detail(x:any){
    this.dataService.Details = x;
    this.details = "1";
  }
}
