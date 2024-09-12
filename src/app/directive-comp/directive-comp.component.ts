import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-comp',
  templateUrl: './directive-comp.component.html',
  styleUrls: ['./directive-comp.component.css']
})
export class DirectiveCompComponent {
  
show:boolean=true;

players=[
{
  pname:"Rohit",
  city:"Mumbai", 
  runs:4500,
  team:"MI"
} , 
{
pname:"Virat",
      city:"Delhi", 
      runs:4000,
      team:"RCB"
},

{
  pname:"Hardilk",
        city:"Delhi", 
        runs:3000,
        team:"MI"
  },
  {
    pname:"Jadeja",
          city:"Delhi", 
          runs:3000,
          team:"CSK"
    }

]
 
}
