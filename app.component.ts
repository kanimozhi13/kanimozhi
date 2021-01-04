import { Component ,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // this code for login
//   userData = {}
 
//   constructor(){}
  

// ngOnInit(){}

// loginUser(){
//   console.log('userData..',this.userData)
// }
carDetails : any;
constructor(private http :HttpClient){
this.carDetails = []

}
  ngOnInit(): void{
    this.http.get<object>('../assets/data.json').subscribe( data=>{
      this.carDetails = data;
      

    })


  }
}
