import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  

  constructor( private param:ActivatedRoute, private service:OrderdetailsService ) {  }
getmenuId:any;
menuData:any;
  ngOnInit(): void {
    this.getmenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuId, 'getmenu');
    if(this.getmenuId){
    this.menuData = this.service.foodDetails.filter((value)=> {
    return value.id==this.getmenuId;
      });
      console.log(this.menuData,'menudata>>')
    }
  }

}
