import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent  {

  @Input()
  sstar:number;
  stars:boolean[]=new Array(5);
  ngOnInit(){
   this.stars.fill(true,0,this.sstar).fill(false,this.sstar,5)
  }


}
