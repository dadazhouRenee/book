import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent  {

  @Input()
  ititle:string;
  @Input()
  iprice:number;
  @Input()
  icontent:string;
  @Input()
  istar:number;
  


}
