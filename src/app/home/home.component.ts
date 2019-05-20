import { EmployeeService } from "./../employee.service";
import { Component, OnInit, OnChanges } from "@angular/core";
import { IEmployee } from "./IEmployee";
declare var $;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  employeeList: IEmployee[];
  allEmployees: IEmployee[];

  gender: string = "all";

  constructor(private employeeService: EmployeeService) {
    //this.allEmployees = this.employeeList = employeeService.getEmployees();
  }

  getEmployeeCount(gender: string) {
    return gender
      ? this.employeeList.filter(e => e.Gender === gender).length
      : this.employeeList.length;
  }

  filterEmployee(sel: string) {
    this.gender = sel;
  }

  deleteEmployee(empId: number) {
    if (confirm("Are you sure want to delete this record?")) {
      console.log(empId);
      this.employeeService.DeleteEmployee(empId).subscribe((res: any) => {
        console.log(res);
        if (res.statusText === "OK") this.GetAllEmployees();
      });
    }
  }

  SearchFilter(sel: string) {
    this.employeeList = this.allEmployees.filter(
      e =>
        e.EmpName.toLowerCase().includes(sel.toLowerCase()) ||
        e.EmpCode.toString().includes(sel.toLowerCase()) ||
        e.Gender.toLowerCase().includes(sel.toLowerCase()) ||
        e.BirthDate.toString().includes(sel.toLowerCase())
    );
  }

  ngOnInit() {
    this.GetAllEmployees();

    $(function() {
      $("#emplst").DataTable();
    });
  }

  GetAllEmployees() {
    this.employeeService.getEmployees().subscribe(e => {
      this.employeeList = this.allEmployees = e;
      console.log(e);
    });
  }
}
