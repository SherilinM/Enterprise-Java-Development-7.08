import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

    employeeList: Employee[] = [];

    show: boolean = false;

    constructor(
        private employeeService: EmployeeServiceService
    ) { }

    ngOnInit(): void {
        this.addDbEmployees();
    }

    showTrue(employee: Employee): void {
        if (employee.showDetails === false) {
            employee.showDetails = true;
        } else {
            employee.showDetails = false;
        }
    }

    deleteEmployee(index: number): void {
        this.employeeService.deleteEmployee(index).subscribe(data => {
            this.addDbEmployees();
        });
    }

    addDbEmployees(): void {
        this.employeeService.getEmployees().subscribe(data => {
            this.employeeList = data;
        });
    }
}