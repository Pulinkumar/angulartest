import { Component, OnInit } from "@angular/core";
import { IEmployee } from "app/home/IEmployee";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeeService } from "app/employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  empCode: number;
  employee: IEmployee = {
    EmpID: null,
    EmpCode: null,
    EmpName: null,
    Gender: null,
    BirthDate: null
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    //this.empCode = route.snapshot.paramMap.get("code");
  }

  backToList() {
    this.router.navigate(["/home"]);
  }

  saveEmployee(employee: IEmployee) {
    console.log(employee);
    this.employeeService
      .SaveEmployee(employee)
      .subscribe((res: any) => console.log(res));
  }

  // deleteEmployee(empId: number) {
  //   console.log(empId);
  //   this.employeeService.DeleteEmployee(empId);
  // }

  ngOnInit() {
    this.empCode = this.route.snapshot.params["code"];

    if (this.empCode) {
      this.employeeService
        .getEmployeesById(this.empCode)
        .subscribe(e => (this.employee = e));
    }
  }
}
