import {Component, OnInit} from '@angular/core';

export interface Person {
  firstName: string;
  lastName: string;
  email: string;
}
 @Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})



export class PersonComponent implements OnInit {

  name = 'Nguyen Van Tu';
  arr: Array<Person> = [];

  constructor() {
    this.arr.push({firstName: 'Tu1', lastName: 'Nguyen', email: 'tu1.nguyen@gmail.com'});
    this.arr.push({firstName: 'Tu2', lastName: 'Nguyen', email: 'tu2.nguyen@gmail.com'});
    this.arr.push({firstName: 'Tu3', lastName: 'Nguyen', email: 'tu3.nguyen@gmail.com'});
    this.arr.push({firstName: 'Tu4', lastName: 'Nguyen', email: 'tu4.nguyen@gmail.com'});
    this.arr.push({firstName: 'Tu5', lastName: 'Nguyen', email: 'tu5.nguyen@gmail.com'});
  }

  ngOnInit(): void {
  }

  showName = () => {
    alert(this.name);
  }
  deleteArr = (email: string): void => {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].email === email) {
        this.arr.splice(i, 1);
        console.log(this.arr);
        return;
      }
    }
  }
}
