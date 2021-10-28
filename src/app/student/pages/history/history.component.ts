import { Component, OnInit, ViewChild } from "@angular/core";
import { select, Store } from "@ngrx/store";
import {
  ColumnMode,
  DatatableComponent,
  SelectionType,
} from "@swimlane/ngx-datatable";
import { AppState } from "app/reducers";
import { Router } from "@angular/router";
import { areFormIds, studentFormsSelector } from "../../student.selectors";
import { Observable } from "rxjs";
import { GraficasRepotesService } from "app/student/services/graficas-repotes.service";
import { Formularios } from "app/interfaces/Formularios.interface";
import { FormularioFormulario } from "../../../interfaces/Formularios.interface";
import {
  FormularioElement,
  Formulario,
} from "../../../interfaces/Formularios.interface";
//----
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexFill,
} from "ng-apexcharts";
import { ChartDataSets } from "chart.js";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};
//-----

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: [
    "./history.component.scss",
    "../../../../assets/sass/libs/datatables.scss",
  ],
})
export class HistoryComponent implements OnInit {
  public rows$: Observable<any>;
  public areForms$: Observable<boolean>;
  public ColumnMode = ColumnMode;
  public tableHeaders = ["ID", "Fecha de presentación", "Acciones"];
  public SelectionType = SelectionType;
  options = { year: "numeric", month: "long", day: "numeric" };

  Formularios: FormularioElement[];
  Formulario: FormularioFormulario;
  Fechas: string[];
  FormData: number[];
  validator: string[] = ["a"];

  dataExist: boolean = false;

  rows = [];
  selected: FormularioElement | any = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { name: "Fecha", prop: "create_ad" },
    { name: "Activo", prop: "formulario.activo" },
    { name: "Reflexivo", prop: "formulario.reflexivo" },
    { name: "Teorico", prop: "formulario.teorico" },
    { name: "Pragmatico", prop: "formulario.pragmatico" },
  ];

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private FormService: GraficasRepotesService
  ) {
    this.FormService.traerformularios().subscribe(({ formularios }) => {
      for (let i = 0; i < formularios.length; i++) {
        let fecha: any = formularios[i].create_ad;
        fecha = new Date(fecha);
        formularios[i].create_ad = fecha.toLocaleString();
      }
      this.rows = formularios;
    });
  }

  ngOnInit(): void {}

  onSelect({ selected }) {
    this.FormService.formulario(this.selected[0]._id).subscribe(
      ({ formulario }) => {
        this.Formulario = formulario.formulario;
        const id = formulario._id;

        for (let i = 0; i < this.validator.length; i++) {
          if (this.validator[i] === id) {
            return;
          }
        }

        const values = Object.values(formulario.formulario);
        const fecha = new Date(formulario.create_ad).toLocaleDateString();
        const color = "#xxxxxx".replace(/x/g, (y) =>
          ((Math.random() * 16) | 0).toString(16)
        );

        const data = {
          data: values,
          label: fecha,
          backgroundColor: color,
        };
        this.Data.push(data);
        this.validator.push(id);

        this.dataExist = true;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  //Grafica

  Data: ChartDataSets[] = [
    //{ data: [], label: "Vendedor A" },
    //{ data: [50, 250, 30, 450, 200], label: "Vendedor B" },
  ];
  Labels: string[] = ["Activo", "Reflexivo", "Teorico", "Pragmatico"];
}
