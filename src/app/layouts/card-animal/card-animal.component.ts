import { DatePipe } from '@angular/common';
import { Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-card-animal',
  standalone: true,
  imports: [DatePipe, MatToolbarModule, MatCardModule, MatButtonModule],
  templateUrl: './card-animal.component.html',
  styleUrl: './card-animal.component.css'
})
export class CardAnimalComponent {

   }

