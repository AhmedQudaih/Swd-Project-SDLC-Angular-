import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-allfile',
  templateUrl: './allfile.component.html',
  styleUrls: ['./allfile.component.css']
})
export class AllfileComponent implements OnInit {
  data:any;
  details:any ="0";
  constructor(private dataService:DataService) { 
    this.datahandler();
  }

  datahandler(){
      this.data = this.dataService.Getdata();
  }

  ngOnInit(): void {
  }

  Colsedetails(){
    this.dataService.CloseDetails();
  }

  Detail(x:any){
    this.dataService.Details = x;
    this.details = "1";
  }

  closedetails(){
    this.details = this.dataService.Details;
    return this.dataService.Details;
  }
  links(){
    return this.dataService.Linkdisable();
  }
}
