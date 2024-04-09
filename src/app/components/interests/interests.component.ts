import { Component, OnInit } from '@angular/core';
//import { CvData } from '../../../data/cvData';


@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css',
})
export class InterestsComponent implements OnInit {
  
  constructor(){}
  ngOnInit(): void {
  }
  interestsList = ['szkic','piłka nożna','muzyka','strzelnictwo','gry komputerowe','książki fantasy']

}
