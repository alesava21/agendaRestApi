import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit{
  agenda: Agenda = new Agenda();
  errorMessage: string = '';

  constructor(private agendaService: AgendaService, private router: Router) { }
  ngOnInit(): void {
  }

  save(agendaForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.agenda));
    if (agendaForm.valid) {
      // this.film.regista = {id:this.registaId};
      this.agendaService.addAgenda(this.agenda).subscribe({
        next: AgendaItem => {
          this.agenda = AgendaItem;
          this.errorMessage = '';
        },
        error: () => this.errorMessage = 'Attenzione! Inserimento fallito!',
        complete: () => {
            if (!this.errorMessage)
              this.router.navigate([`agenda/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
          }
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
}

