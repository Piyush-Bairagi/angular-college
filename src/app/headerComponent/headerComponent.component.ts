import { Component } from '@angular/core';

@Component({
    selector: 'headerComponent',
    templateUrl: './headerComponent.component.html',
    styleUrls: [ './headerComponent.component.css' ]
})
export class HeaderComponent {
    studentName:string = "Piyush";
    inputBoxValue:string = "Bairagi";
    areAllCSEStudent:boolean = true;
    stream:string = "CSE";
    studentDetails = [
        {name: 'Piyush', branch: 'CSE', address: 'Pune'},
        {name: 'Ayush', branch: 'BCA', address: 'Indore'},
        {name: 'Aditya', branch: 'IT', address: 'Indore'},
        {name: 'Shubham', branch: 'CE', address: 'Hyderabad'},
    ];

    addStudent(input:string) {
        this.studentName = input;
        this.studentDetails.push({name: input, branch: 'CSE', address: 'Indore'});
    }
 }