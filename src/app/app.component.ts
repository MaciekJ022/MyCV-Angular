import { Component, Input, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CvData } from '../moldels/cvData';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { ExperienceComponent } from './components/experience/experience.component';

@Pipe({
  name:'emote'
})

class EmotePipe{
  transform(value: string, emoteValue: string, checked: boolean = false){
    let emote = '&#128540'
    if(checked){
      value += emote
      return value
    }
    
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, BrowserModule, 
    RouterOutlet, RouterLink, RouterLinkActive, 
    BrowserAnimationsModule, MatTabsModule, MatButtonModule, MatRadioModule, MatInputModule,
    ExperienceComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  experience = ''
  data = [
    new CvData('Kamil',
      'Kowal',
      27, 
      [
      'Szkoła Podstawowa nr 24',
      'Technikum Budownictwa i Architektury', 
      'Szkoła Główna Handlowa'
      ], 
      false, 
      false)
    
  ]
  experiences = []
  title = 'my-cv';
}
