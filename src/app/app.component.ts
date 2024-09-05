import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  num : number = 10;
  num1 = 22.22;

  str :string = "Hello";
  str1 = "Hello";

  bool:boolean = true;
  bool1 = true;
  greet = " Hello World"

  //Dclare array
  arr = ["Java" , "Angular" , "Python" , "Android"];

  student = {
  name : "John",
  age : 22,
  city : "Pune" , 
  marks: 80
  }

  hello(){
    console.log("Hello World")
    return this.greet
  }

  employee_info =[
  {
empmo:11,
empName:"Alice",
empCountry:"India",
empSalary:4500
  },
  {
    empmo:12,
    empName:"Bob",
    empCountry:"US",
    empSalary:5500
      },
      {
        empmo:13,
        empName:"Ram",
        empCountry:"UK",
        empSalary:6500
          },
          {
            empmo:14,
            empName:"Sham",
            empCountry:"India",
            empSalary:7500
              },


]

}
