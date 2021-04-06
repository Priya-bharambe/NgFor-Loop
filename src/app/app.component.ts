import { Component } from '@angular/core';

interface Student {
  name: string;
  id: number;
  phone: number;
  city: string;
}

const STUDENTS: Student[] = [
  {
    name: 'Akshaya',
    id: 101,
    phone: 8102492462,
    city: 'Sangli'
  },
  {
    name: 'Anuja',
    id: 102,
    phone: 9038467121,
    city: 'Nagar'
  },
  {
    name: 'Aakash',
    id: 103,
    phone: 9712885773,
    city: 'Indore'
  },
  {
    name: 'Bharti',
    id: 104,
    phone: 8468904214,
    city: 'Aurangabad'
  },
  {
    name: 'Ganesh',
    id: 105,
    phone: 9634871649,
    city: 'Pune'
  },
  {
    name: 'Payal',
    id: 106,
    phone: 9054689123,
    city: 'Indore'
  },
  {
    name: 'Pawan',
    id: 107,
    phone: 8312489731,
    city: 'Pune'
  },
  {
    name: 'Priya',
    id: 109,
    phone: 8965421678,
    city: 'Pune'
  },
  {
    name: 'Tushar',
    id: 110,
    phone: 7636412890,
    city: 'Pune'
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ForLoop';
  students = STUDENTS;
}
