import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {


  signInForm:FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.signInForm=new FormGroup({
      email:new FormControl(null,Validators.email),
      password:new FormControl(null,[Validators.minLength(6),Validators.maxLength(12)])
    })
  }
  onSubmit(){
    console.log(this.signInForm.controls);
  }

}
