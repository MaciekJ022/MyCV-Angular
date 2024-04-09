import { Component } from '@angular/core';
import { CvdataService } from '../../../services/cvdata.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public DataList: any = []

  constructor(private dataService: CvdataService){
    this.DataList = this.dataService.getData()
  }
}
