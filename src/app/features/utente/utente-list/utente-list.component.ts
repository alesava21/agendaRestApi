import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Utente } from 'src/app/model/utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-list',
  templateUrl: './utente-list.component.html',
  styleUrls: ['./utente-list.component.css']
})
export class UtenteListComponent implements OnInit{

  utenteLits?: Utente[];
  sub?: Subscription;
  confirmMessage: string = '';

  constructor(private utenteService: UtenteService,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.sub = this.utenteService.getUsers().subscribe(utenteListItem => this.utenteLits = utenteListItem);



    this.route
    .queryParams
    .subscribe(params =>{
      this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
