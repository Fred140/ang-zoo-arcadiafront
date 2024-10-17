import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email: string = '';
    password: string = '';

    constructor (private auth: AuthService, private router: Router) {}

    async signIn() {
  try {
    await this.auth.signIn(this.email, this.password);
    this.router.navigate(['dashboard']);
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
   }
  }
}
