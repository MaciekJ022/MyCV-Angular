import { CommonModule, } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CvdataService } from '../../../services/cvdata.service';


@Component({
    selector: 'app-education',
    standalone: true,
    imports: [CommonModule, ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.css'
})

export class EducationComponent {

    public DataList: any = []

  constructor(private dataService: CvdataService){
    //this.DataList = this.dataService.getData()
    this.DataList = this.dataService.getData()
  }
}