import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "employee-count",
  templateUrl: "./employee-count.component.html",
  styleUrls: ["./employee-count.component.css"]
})
export class EmployeeCountComponent implements OnInit {
  selectedRadio: string = "all";
  searchText: string = "";

  @Output()
  selectedRadiochangeEvent: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  textBoxChangeEvent: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: Number;
  @Input()
  male: Number;
  @Input()
  female: Number;

  constructor() {}

  onRadioChange() {
    this.selectedRadiochangeEvent.emit(this.selectedRadio);
  }

  onSearchTextChange() {
    this.textBoxChangeEvent.emit(this.searchText);
  }

  ngOnInit() {}
}
