import { CommonModule, } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { CvdataService } from '../../../services/cvdata.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
 public DataList: any = []
 
 constructor(private dataService: CvdataService){
   this.DataList = this.dataService.getData()
 }
 }
