import { Component, Pipe, PipeTransform, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
//import { CvData } from '../data/cvData';
import { CommonModule } from '@angular/common';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';

import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from "./components/education/education.component";
import { ContactComponent } from './components/contact/contact.component';
import { InterestsComponent } from './components/interests/interests.component';

import { CvdataService } from '../services/cvdata.service';

@Pipe({
  standalone: true,
  name:'emote'
})

class EmotePipe implements PipeTransform{
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
      ExperienceComponent,EducationComponent, ContactComponent, InterestsComponent, 
    ],
    providers:[CvdataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public DataList: any = []

  constructor(private dataService: CvdataService){
    //this.DataList = this.dataService.getData()
    this.DataList = this.dataService.getData()
  }
  title = 'my-cv';
}
