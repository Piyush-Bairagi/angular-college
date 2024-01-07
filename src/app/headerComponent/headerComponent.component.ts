import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'headerComponent',
    templateUrl: './headerComponent.component.html',
    styleUrls: [ './headerComponent.component.css' ]
})
export class HeaderComponent {

    areAllCSEStudent:boolean = false;
    stream:string = "CSE";
    backgroundColour= "White";
    studentDetails = [
        {name: 'Piyush', branch: 'CSE', address: 'Pune'},
        {name: 'Ayush', branch: 'BCA', address: 'Indore'},
        {name: 'Aditya', branch: 'IT', address: 'Indore'},
        {name: 'Shubham', branch: 'CE', address: 'Hyderabad'},
    ];

    addStudent(input:NgForm) {
        this.studentDetails.push({name: input.value.studentName, branch: input.value.studentStream, address: input.value.studentAddress});
    }

    changeStyle() {
        this.backgroundColour = "SkyBlue";
    }
 }