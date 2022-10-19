import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addfasion',
  templateUrl: './addfasion.component.html',
  styleUrls: ['./addfasion.component.css']
})
export class AddfasionComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false

  name=""
  category=""
  brand=""
  price=""
  stock=""
  readvalue=()=>{
    let data={
      "name":this.name,
      "category":this.category,
      "brand":this.brand,
      "price":this.price,
      "stock":this.stock

    }
    console.log(data)
    this.myapi.addfasion(data).subscribe(
      (response)=>{
        console.log(response)
        
      }
    )
    alert("Item added successfully")
    this.name=""
    this.category=""
    this.brand=""
    this.price=""
    this.stock=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
