import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Agenda } from 'src/app/model/agenda';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.css']
})
export class AgendaListComponent implements OnInit{
  agendaList?: Agenda[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private agendaService: AgendaService, private router: ActivatedRoute){}
  ngOnInit(): void {
    this.sub = this.agendaService.getAgenda().subscribe(agendaListItem => this.agendaList = agendaListItem);

    //verifico la presenza del messaggio nei query params
    this.router
    .queryParams
    .subscribe(params =>{
      //se non e presente in confirmMessage non faccio nulla
      this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
