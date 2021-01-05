import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component'; 
import {employeeTitlePipe} from './employeeTitle.Pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    employeeTitlePipe,
    FilterPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
