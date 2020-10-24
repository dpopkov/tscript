import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of SalesPerson objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup", "Kumar", "anup.kumar@example.org", 50000),
    new SalesPerson("John", "Dow", "john.dow@example.org", 40000),
    new SalesPerson("Clair", "Murphy", "clair.murphy@example.org", 90000),
    new SalesPerson("Mai", "Truong", "mai.truong@example.org", 60000)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
