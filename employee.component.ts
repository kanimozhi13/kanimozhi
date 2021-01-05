import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() public parentComp : any;

  searchMe:string = "";
  names :any;

  constructor() { }

  ngOnInit(): void {
  }

}