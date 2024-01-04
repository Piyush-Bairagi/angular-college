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

    addStudent(input:string) {
        this.studentName = input;
    }
 }