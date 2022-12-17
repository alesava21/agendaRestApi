import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';
import { AgendaDetailComponent } from './agenda-detail/agenda-detail.component';

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
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
