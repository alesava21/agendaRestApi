import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/model/utente';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-utente-create',
  templateUrl: './utente-create.component.html',
  styleUrls: ['./utente-create.component.css']
})
export class UtenteCreateComponent implements OnInit {

  utente: Utente = new Utente;
  errorMessage: string = '';

  constructor(private utenteService: UtenteService, private router: Router) { }

  ngOnInit(): void {
  }

  save(utenteForm: NgForm): void {
    console.log('sub ' + JSON.stringify(this.utente));
    if (utenteForm.valid) {
      // this.film.regista = {id:this.registaId};
      this.utenteService.addUser(this.utente).subscribe({
        next: AgendaItem => {
          this.utente = AgendaItem;
          this.errorMessage = '';
        },
        error: () => this.errorMessage = 'Attenzione! Inserimento fallito!',
        complete: () => {
            if (!this.errorMessage)
              this.router.navigate([`utente/list`], { queryParams: { confirmMessage: 'Operazione effettuata correttamente.' } })
          }
      });
    } else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }
}

