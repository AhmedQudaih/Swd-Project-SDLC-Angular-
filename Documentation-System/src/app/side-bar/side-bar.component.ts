import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  data:any;
  constructor(private dataService: DataService) {
    this.data = this.dataService.Getdata();
   }

  ngOnInit(): void {
  }

  Detail(Data:any){
    this.dataService.Details = Data;
    
  }
}
