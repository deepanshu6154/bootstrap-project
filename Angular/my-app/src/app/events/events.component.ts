import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputData:string = "";
  
  getName(name:string,rollNo:number){
      alert(name);
      alert(rollNo);
  }

  getData(val:string){
    console.log(val);
  }

  getValue(val:string){
      this.inputData = val;
  }

}
