import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';
import { AgendaDeleteComponent } from './agenda-delete/agenda-delete.component';

const routes: Routes = [
  {
    path: 'list',
    component: AgendaListComponent
  },
  {
    path: 'create',
    component: AgendaCreateComponent
  },
  {
    path: 'edit/:id',
    component: AgendaCreateComponent
  },
  {
    path: 'delete/:id',
    component: AgendaDeleteComponent
  },
  {
    path: ':id',
    component: AgendaDetailComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaCreateComponent,
    AgendaDetailComponent,
    AgendaDeleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
