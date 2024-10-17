import { Component } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}

  logOut() {
    this.auth.signOut();
  }
}
