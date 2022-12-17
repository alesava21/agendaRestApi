import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaListComponent } from './agenda-list/agenda-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: AgendaListComponent
  },
  {
    path: 'create',
    component: AgendaCreateComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AgendaListComponent,
    AgendaCreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AgendaModule { }
