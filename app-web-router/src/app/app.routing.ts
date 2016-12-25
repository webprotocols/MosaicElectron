import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { IntroComponent} from './intro.component';
import { ListComponent } from './article/dept/list/list.component';
import { AppendComponent } from './article/dept/append/append.component';
import { ModifyComponent } from './article/dept/modify/modify.component';
import { DeleteComponent } from './article/dept/delete/delete.component';

// Config
let hashLocationStrategy: boolean = false;

const helloRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'dept/list',   component: ListComponent },
  { path: 'dept/append', component: AppendComponent },
  { path: 'dept/modify', component: ModifyComponent },
  { path: 'dept/delete', component: DeleteComponent }
];

const appRoutes: Routes = [
  ...helloRoutes,
  { path: '**', component: NotFoundComponent }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);