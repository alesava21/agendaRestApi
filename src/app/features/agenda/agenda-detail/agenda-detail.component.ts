import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-detail',
  templateUrl: './agenda-detail.component.html',
  styleUrls: ['./agenda-detail.component.css']
})
export class AgendaDetailComponent implements OnInit{

  selectedAgenda?: Agenda;
  errorMessage: string = '';
  confirmMessage: string = '';

  constructor(private agendaService: AgendaService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.agendaService.getAgendas(idParam).subscribe({
      next:agendaItem => {
        this.selectedAgenda = agendaItem;
        console.log(JSON.stringify(agendaItem))
      },
      error: err => this.errorMessage = err
    })

     //verifico presenza messaggio nei query params
     this.route
     .queryParams
     .subscribe(params => {
       // se non è presente il confirmMessage non faccio nulla
       this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
     });
  }

}
