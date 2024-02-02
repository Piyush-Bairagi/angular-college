import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'College';
  navTitle = 'Angular'
  areAllCSEStudent:boolean = false;
  stream:string = "CSE";
  backgroundColour= "White";
  twoWayBindingVariableName:string="";
  studentDetails = [
      {name: 'Piyush', branch: 'CSE', address: 'Pune'},
      {name: 'Ayush', branch: 'BCA', address: 'Indore'},
      {name: 'Aditya', branch: 'IT', address: 'Indore'},
      {name: 'Shubham', branch: 'CE', address: 'Hyderabad'},
  ];

  addStudent(input:NgForm) {
      this.studentDetails.push({name: input.value.studentName, branch: input.value.studentStream, address: input.value.studentAddress});
  }

  removeItem(name:string) {
      this.studentDetails = this.studentDetails.filter(item => item.name !== name);
  }

  changeStyle() {
      this.backgroundColour = "SkyBlue";
  }

  updateNavTitle(item:string) {
	    this.navTitle = item;
  }

  showPropertyValue(value:string){
      console.warn(value);
  }
}
