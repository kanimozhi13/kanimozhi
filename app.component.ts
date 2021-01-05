import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public employee:object;
  isShow :boolean = true
  // searchMe:string =""
  
  constructor(private http :HttpClient){
    this.employee = []
  }

  // searchMe(){
  //   this.employee = this.employee.filter(res=>{
      
  //   })
      
  //   });

  ngOnInit(){

    this.http.get<object>('../assets/employee.json').subscribe( data=>{
      this.employee = data;})
  }
hideList(){
  this.isShow = false 
}

}


