import { Component, OnInit,OnDestroy,OnChanges,AfterContentInit,AfterViewChecked,AfterContentChecked,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHOOKComponent implements OnInit,OnDestroy,OnChanges,AfterContentInit,AfterViewChecked,AfterViewInit,AfterContentChecked{

  constructor() {
    console.log('constructor...')
   }

   ngOnInit() {
    console.log('ngOnInit....')
   }

   ngOnChanges(){
    console.log('onchange.....')
  }

  ngOnDestroy() {
    console.log('destroy.....')
  }

  ngAfterViewChecked(): void {
    console.log('afterviewcheck.....')
  }
  ngAfterContentInit(){
    console.log(' ngAfterContentInit....') 
  }
  ngAfterContentChecked(){
    console.log('AfterContentChecked.....')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit....') 
  }
  

  
  
  
  

}
