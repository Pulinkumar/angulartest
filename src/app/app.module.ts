import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeCountComponent } from "./home/employee-count.component";
import { HttpModule } from "@angular/http";

import { FormsModule } from "@angular/forms";
import { EmployeeService } from "./employee.service";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "employee/:code", component: EmployeeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
