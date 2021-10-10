import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { ColumnMode } from '@swimlane/ngx-datatable';
import { AppState } from 'app/reducers';
import { Router } from '@angular/router';
import { areFormIds, studentFormsSelector } from '../../student.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss', '../../../../assets/sass/libs/datatables.scss']
})
export class HistoryComponent implements OnInit {

  public rows$: Observable<any>;
  public areForms$: Observable<boolean>;
  public ColumnMode = ColumnMode;
  public tableHeaders = ['ID', 'Fecha de presentación', 'Acciones'];

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {

    this.areForms$ = this.store
      .pipe(
        select(areFormIds)
      );

    this.rows$ = this.store
        .pipe(
          select(studentFormsSelector)
        )

  }

}
