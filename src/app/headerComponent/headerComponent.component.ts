import { Component } from '@angular/core';

@Component({
    selector: 'headerComponent',
    templateUrl: './headerComponent.component.html',
    styleUrls: [ './headerComponent.component.css' ]
})
export class HeaderComponent {
    studentName:string = "Piyush";

    addStudent(input:string) {
        this.studentName = input;
    }
 }