import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  object = [
    {name:'Deepanshu Sharma',email:'deepanshu@test.com'},
    {name:'Anil Kumar' ,email:'anil@test.com'},
    {name:'Yogesh Kumar',email:'yogesh@test.com'},
    {name:'Christina Soren',email:'christina@test.com'}
  ]

  users = [
    {name:'Prince',phone:'1111',social:['facebook','instagram','youtube']},
    {name:'Sam' ,phone:'3232',social:['github','instagram','whatsApp']},
    {name:'kartik',phone:'6453',social:['tinder','tantan','youtube']},
    {name:'Kunal',phone:'232312',social:['facebook','github','linkedIn']}
  ]

}
