import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Observable";
import { IEmployee } from "./home/IEmployee";

@Injectable()
export class EmployeeService {
  constructor(private http: Http) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get("http://localhost:17916/api/Employee")
      .map((response: Response) => <IEmployee[]>response.json());
  }

  getEmployeesById(empId: number): Observable<IEmployee> {
    return this.http
      .get("http://localhost:17916/api/Employee/" + empId)
      .map((response: Response) => <IEmployee>response.json());
  }

  SaveEmployee(employee: IEmployee): Observable<Response> {
    return this.http.post("http://localhost:17916/api/Employee", employee);
  }

  DeleteEmployee(empId: number) {
    return this.http.delete("http://localhost:17916/api/Employee/" + empId);
  }
}
