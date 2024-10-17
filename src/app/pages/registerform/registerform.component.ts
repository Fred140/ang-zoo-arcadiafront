import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './registerform.component.html',
  styleUrl: './registerform.component.css'
})
export class RegisterformComponent implements OnInit {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {

  }

async signUp() {
  try {
    await this.auth.signUp(this.email, this.password);
    this.router.navigate(['dashboard']);
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
   }
  }
}
