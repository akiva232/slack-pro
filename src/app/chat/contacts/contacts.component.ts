import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dataName=[
    {name:"moshe",id:1,city:"bnei-brak"},
    {name:"yoni",id:2,city:"bnei-brak"},
    {name:"david",id:3,city:"bnei-brak"}
  ]

}
