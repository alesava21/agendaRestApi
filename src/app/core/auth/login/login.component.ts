import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/model/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  user?: User;
  errorMessage: string = '';
  destroy$: Subject<boolean> = new Subject();

  constructor(private router: Router, private authService: AuthService, private route: ActivatedRoute) { }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onClick(loginForm: NgForm): void {
    if (!loginForm.invalid)
      this.authService.login(loginForm.value).pipe(
        takeUntil(this.destroy$)).subscribe(res => {
          this.authService.setUserLogged(res);
          this.router.navigateByUrl("welcome")
        });
    else
      this.errorMessage = 'Attenzione! Operazione fallita! Il form non è stato validato';
  }

}
