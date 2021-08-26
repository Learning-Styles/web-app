import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { FULL_LAYOUT_ROUTES } from './layouts/full/full-layout-routing.module';
import { FullLayoutComponent } from './layouts/full/full-layout.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  { 
    path: 'auth', 
    loadChildren: () => import('../app/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: '', 
    component: FullLayoutComponent, 
    children: FULL_LAYOUT_ROUTES, 
    // canActivate: [AuthGuard] 
  },
  {
    path: '**',
    component: ErrorComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, 
      { 
        preloadingStrategy: PreloadAllModules, 
        relativeLinkResolution: 'legacy' 
      }
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
