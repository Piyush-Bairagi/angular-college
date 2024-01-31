import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'headerComponent',
    templateUrl: './headerComponent.component.html',
    styleUrls: [ './headerComponent.component.css' ]
})
export class HeaderComponent {
    @Input() navHeading: string = "College";
    @Output() updateNavTitleEvent = new EventEmitter<string>();
 }