import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportesGraficasRoutingModule } from "./reportes-graficas-routing.module";
import { GraficasComponent } from "./pages/graficas/graficas.component";
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [GraficasComponent],
  imports: [CommonModule, ReportesGraficasRoutingModule, ChartsModule],
  exports: [GraficasComponent],
})
export class ReportesGraficasModule {}
