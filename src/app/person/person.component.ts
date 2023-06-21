import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  PersonObj : Person[]=[
    {name:"John",age:30, gender:"Male"},
    {name:"Sara",age:29, gender:"Female"},
    {name:"Eric",age:35, gender:"Male"}
  ];

}
