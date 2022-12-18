import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Utente } from 'src/app/model/utente';
import { UtenteModule } from '../utente.module';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-detail',
  templateUrl: './utente-detail.component.html',
  styleUrls: ['./utente-detail.component.css']
})
export class UtenteDetailComponent implements OnInit {

  selectedUser?: Utente;
  errorMessage: string = '';
  confirmMessage: string = '';

  constructor(private route: ActivatedRoute, private utenteService: UtenteService,
    private router: Router) { }

  ngOnInit(): void {
    let idParam = Number(this.route.snapshot.paramMap.get('id'));
    this.utenteService.getUser(idParam).subscribe({
      next: utenteItem => {
        this.selectedUser = utenteItem;
        console.log(JSON.stringify(utenteItem))
      },
      error: err => this.errorMessage = err
    });

    //verifico presenza messaggio nei query params
    this.route
      .queryParams
      .subscribe(params => {
        // se non è presente il confirmMessage non faccio nulla
        this.confirmMessage = params['confirmMessage'] ? params['confirmMessage'] : '';
      });
  }
}


