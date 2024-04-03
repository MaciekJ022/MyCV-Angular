import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CvData } from '../data/cvData';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from "./components/education/education.component";

@Pipe({
  name:'emote'
})

class TranslationPipe{
  transform(text: string, translation: string){
    let translated = translation
    let temp = text
    text = translated
    translated = temp
    return text
  }
}

class EmotePipe{
  transform(value: string){
    let emote = '&#128540'
    value += emote 
    return value
    
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, RouterLink, RouterLinkActive, 
     MatTabsModule, MatButtonModule, MatRadioModule, MatInputModule,
    ExperienceComponent,EducationComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
      [])
    
  ]
  title = 'my-cv';
}
