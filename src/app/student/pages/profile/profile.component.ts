import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import states from "../../../../assets/json/states.json";
import cities from "../../../../assets/json/cities.json";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProfileComponent implements OnInit {
  activeTab = "general";
  generalFormSubmitted = false;
  changePasswordFormSubmitted = false;
  infoFormSubmitted = false;
  alertVisible = true;

  departamentosAll: any[] = states['states'];
  departamentosCol: any[] = [];

  ciudadAll: any[] = cities['cities'];
  ciudadCol: any[] = [];

  countries = [
    { value: "Masculino", name: "Masculino" },
    { value: "Femenino", name: "Femenino" },
  ];

  generalForm = new FormGroup({
    name: new FormControl("Hermione Granger", [Validators.required]),
  });

  changePasswordForm = new FormGroup({
    oldPassword: new FormControl("", [Validators.required]),
    newPassword: new FormControl("", [Validators.required]),
    retypeNewPassword: new FormControl("", [Validators.required]),
  });

  constructor() {}

  ngOnInit() {}

  setActiveTab(tab) {
    this.activeTab = tab;
  }

  get gf() {
    return this.generalForm.controls;
  }

  get cpf() {
    return this.changePasswordForm.controls;
  }

  onGeneralFormSubmit() {
    this.generalFormSubmitted = true;
    if (this.generalForm.invalid) {
      return;
    }
  }

  onChangePasswordFormSubmit() {
    this.changePasswordFormSubmitted = true;
    if (this.changePasswordForm.invalid) {
      return;
    }
  }

  cuidadFuncion(data: string) {
    this.ciudadCol = [];
    console.log(data);

    for (let index = 0; index < this.ciudadAll.length; index++) {
      if (this.ciudadAll[index].id_state == data) {
        this.ciudadCol.push(this.ciudadAll[index]);
      }
    }

    console.log(this.ciudadCol);
  }
}
