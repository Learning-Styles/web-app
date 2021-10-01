import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '../auth/action-types';
import { concatMap, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { StudentService } from './services/student.service';
import { dispatch } from 'rxjs/internal/observable/pairs';
import { StudentActions } from './action-types';


@Injectable()
export class StudentEffects {

    constructor(private actions$: Actions, private store: Store, private studentService: StudentService) { }

    forms$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType(AuthActions.userLoaded),
                concatMap(action => 
                    this.studentService.getStudentForms(action.studentId, action.token)
                ),
                map((res: any) => {
                    const forms = res.formularios;
                    return StudentActions.allFormsLoaded({forms})
                })
            )
    );
}
