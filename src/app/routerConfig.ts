// routerConfig.ts
import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';

export const appRoutes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'products',
    component: ShowComponent
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];
