import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteListComponent } from './utente-list/utente-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UtenteCreateComponent } from './utente-create/utente-create.component';
import { UtenteDetailComponent } from './utente-detail/utente-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: UtenteListComponent
  },
  {
    path: ':id',
    component: UtenteDetailComponent
  },
  {
    path: 'create',
    component: UtenteCreateComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    UtenteListComponent,
    UtenteCreateComponent,
    UtenteDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UtenteModule { }
