import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
    selector: 'app-details',
    templateUrl: './employee-details.component.html',
    styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

    @Input() employee!: Employee;
    @Input() index!: number;

    @Output() deleteEmployeeEvent = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    deleteEmployee(index: number): void {
        this.deleteEmployeeEvent.emit(index);
    }

}