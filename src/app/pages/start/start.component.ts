import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ModalStartComponent } from "./modal-start/modal-start.component";

@Component({
  selector: "app-start",
  templateUrl: "./start.component.html",
  styleUrls: ["./start.component.scss"],
})
export class StartComponent {
  ngOnInit() {
    this.openModal();
    {
    }
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ["", Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ["", Validators.required],
  });

  isLinear = true;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) {}

  openModal() {
    this.dialog.open(ModalStartComponent, { width: "1200px"});
  }

}
