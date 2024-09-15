import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  selectedNumber: number = 1; // Default selected number
  tableData: number[][] = []; // Array to store multiple tables
  showTable: boolean = false; // Flag to show/hide the tables

  // Method to generate the multiplication tables for numbers from 1 to selectedNumber
  printTables(): void {
    this.tableData = []; // Clear previous tables
    this.showTable = false; // Hide table during generation

    // Loop through each number from 1 to the selected number
    for (let i = 1; i <= this.selectedNumber; i++) {
      const table: number[] = [];
      for (let j = 1; j <= 10; j++) {
        table.push(i * j); // Push only the values (results of multiplication)
      }
      this.tableData.push(table); // Add the current table to the list of tables
    }

    this.showTable = true; // Show the tables after generation
  }
}