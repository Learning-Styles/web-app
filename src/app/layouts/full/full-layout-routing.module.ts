import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const FULL_LAYOUT_ROUTES: Routes = [
  {
    path: 'student',
    loadChildren: () => import('../../student/student.module').then(m => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(FULL_LAYOUT_ROUTES)],
  exports: [RouterModule]
})
export class FullLayoutRoutingModule { }
