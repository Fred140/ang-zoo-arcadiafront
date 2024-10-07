import { Component } from '@angular/core';
import { CardServiceComponent } from "../../layouts/card-service/card-service.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CardServiceComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
