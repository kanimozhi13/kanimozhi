import { Component, Input, Output , OnInit } from '@angular/core';
//import { EventEmitter } from 'events';// if do will get error instead event use angular core
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  //declare @Input decorator 
@Input() public parentComp : any;
@Output() public childEvent = new EventEmitter() ;

constructor() { }

  ngOnInit() {

  }
receivedEvent(){
  this.childEvent.emit('received emp details');
  console.log('event is fired')
}

}
