import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtenteListComponent } from './utente-list/utente-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'list',
    component: UtenteListComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    UtenteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UtenteModule { }
