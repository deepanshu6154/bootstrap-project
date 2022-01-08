import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {FormControl,FormGroup,FormControlName,Validators} from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    user: new FormControl('Deepanshu',[Validators.required,Validators.email]),
    password: new FormControl('123',[Validators.required,Validators.minLength(4)])
  })

  loginUser()
  {
    console.log(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('user');
  }

  get password(){
    return this.loginForm.get('password');
  }

  userData: any ;
  
  getData(data:NgForm)
  {
    this.userData = data;
    console.log(data);
  }


}

