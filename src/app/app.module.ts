import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/user/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'profile', loadChildren: () => import('./pages/user/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'settings', loadChildren: () => import('./pages/user/settings/settings.module').then(m => m.SettingsModule) },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  // {
  //   path: 'admin',
  //   component: AdminLayoutComponent,
  //   children: [
  //     { path: 'dashboard', loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  //     { path: 'users', loadChildren: () => import('./pages/admin/users/users.module').then(m => m.UsersModule) },
  //     { path: 'settings', loadChildren: () => import('./pages/admin/settings/settings.module').then(m => m.SettingsModule) },
  //     { path: 'reports', loadChildren: () => import('./pages/admin/reports/reports.module').then(m => m.ReportsModule) },
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
  //   ]
  // },
  { path: '', redirectTo: 'user/dashboard', pathMatch: 'full' }
];

@NgModule({
  // declarations: [
  //   AppComponent,
  //   UserLayoutComponent,
  //   AdminLayoutComponent
  // ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }
