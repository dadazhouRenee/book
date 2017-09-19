import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent  {
  books:Array<any> = [
    {
      "title":'bookTiele-1',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":4
    },
    {
      "title":'bookTiele-2',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":5
    },
    {
      "title":'bookTiele-3',
      "price":300+parseInt(Math.random()*10+""),
      "content":"this is a very good ",
      "star":2
    },
  ];

}
