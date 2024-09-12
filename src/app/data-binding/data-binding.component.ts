import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  mycolor:string='red';
  newStyle={
    color:'green',
    fontSize: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'lightgrey'
  }
  myClass:string ="sucess"
  myClass1:string ="warning"
  myClass2:string ="danger"
  myClass3:string ="primary"

  txt:string = "Welcome to TheKiranAcademy"
  txt1:string="Hello World"

  imgPath:string="assets/img/img1.jpeg"
  imgPath1:string="assets/img/img2.jpeg"
  imgPath2:string="assets/img/img3.jpeg"

  modelVal:string=""

  a:number=0
  b:number=0
}
