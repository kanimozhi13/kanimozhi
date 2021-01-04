import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public employee:object;
  public names ="hi kaniozhi";
  public message = " ";
  
  constructor( private http:HttpClient){
    this.employee=[]
}

  ngOnInit(){

    this.http.get<object>('../assets/employee.json').subscribe( data=>{
      this.employee = data;})
  }
 
}
