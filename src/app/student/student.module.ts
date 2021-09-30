import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { ChaeaComponent } from './pages/chaea/chaea.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HelpComponent } from './pages/help/help.component';
import { HistoryComponent } from './pages/history/history.component';

import { NgSelectModule } from "@ng-select/ng-select";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SwiperModule } from "ngx-swiper-wrapper";


@NgModule({
  declarations: [
    StudentComponent,
    ChaeaComponent,
    DashboardComponent,
    ProfileComponent,
    HelpComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NgbModule,
    SwiperModule,
    NgSelectModule
  ]
})
export class StudentModule { }
