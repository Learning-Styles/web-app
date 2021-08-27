import { Routes } from '@angular/router';

export const FULL_LAYOUT_ROUTES: Routes = [
    {
      path: 'student',
      loadChildren: () => import('../../student/student.module').then(m => m.StudentModule)
    }
];
