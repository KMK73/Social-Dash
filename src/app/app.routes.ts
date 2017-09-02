import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './shared/auth.service';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    // add AuthGuard to protect a route
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);