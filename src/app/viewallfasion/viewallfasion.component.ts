import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallfasion',
  templateUrl: './viewallfasion.component.html',
  styleUrls: ['./viewallfasion.component.css']
})
export class ViewallfasionComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.fasionData=data
      }
    )
  }


  fasionData:any=[]

  ngOnInit(): void {
  }

}


