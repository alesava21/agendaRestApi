import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-delete',
  templateUrl: './agenda-delete.component.html',
  styleUrls: ['./agenda-delete.component.css']
})
export class AgendaDeleteComponent implements OnInit{

  selectedAgenda: Agenda = new Agenda;
  errorMessage: string = '';
  id: number = Number(this.route.snapshot.paramMap.get('id'))

  constructor(private agendaService: AgendaService, private route: ActivatedRoute, private redirect: Router){}
  ngOnInit(): void {
    this.agendaService
    .getAgendas(this.id).subscribe(agenda => this.selectedAgenda = agenda)
  }

  delete(agendaForm: NgForm): void{
    this.agendaService.delete(this.id).subscribe({
      next: agenda => this.selectedAgenda.id = this.id,
      complete: () => {
        if (!this.errorMessage)
          this.redirect.navigate([`agenda/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
      }
    })
  }

  // onClick(): void {
  //   this.redirect.navigate(['libro/list'])
  // }


}
