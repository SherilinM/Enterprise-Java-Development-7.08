import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeServiceService {

    constructor(
        private http: HttpClient,
    ) { }


    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>('http://localhost:8080/all-employees');
    }

    deleteEmployee(index: number): Observable<any> {
        return this.http.delete('http://localhost:8080/delete-employee/' + index);

    }

}