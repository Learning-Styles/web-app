import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from 'ngx-spinner';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { ErrorComponent } from './error/error.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { RouterModule } from '@angular/router';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

@NgModule({
  declarations: [
    AppComponent, 
    ErrorComponent,
    FullLayoutComponent
  ],
  imports: [
    NgbModule,
    SharedModule,
    RouterModule,
    NgxSpinnerModule,
    AppRoutingModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { 
      provide: PERFECT_SCROLLBAR_CONFIG, 
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG 
    },
    WINDOW_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
