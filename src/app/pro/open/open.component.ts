import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css']
})
export class OpenComponent implements OnInit {


  signInForm:FormGroup;
  constructor(public a:Router) { }

  ngOnInit(): void {

    this.signInForm=new FormGroup({
      email:new FormControl(null,Validators.email),
      password:new FormControl(null,[Validators.minLength(6),Validators.maxLength(12)])
    })
  }
  onSubmit(){
    console.log(this.signInForm.controls);
  }
    //  sigin(){this.a.navigate(["/chat"])

    //  }

}
