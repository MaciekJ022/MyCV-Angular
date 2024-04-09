import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvdataService {
  public cvDataList = [
    {name:'Kamil',
    surname:'Kowal',
    age:22, 
    education:[
    {name:'Szkoła Podstawowa nr 24', from: '01-09-1994', to: '27-06-2002'},
    {name:'Technikum Budownictwa i Architektury', from:'01-09-2002',to:'24-06-2010'}, 
    {name:'Szkoła Główna Handlowa', from:'01-10-2011', to:'-'}
    ], 
    isAStudent: true, 
    experiences:[
      {name: 'Angular', yearsOfExperience: 3, certificate: true}, 
      {name: 'C#', yearsOfExperience: 2, certificate: false},
      {name: 'Python', yearsOfExperience: 7, certificate: true},
    ],
    email: 'email@random.com', 
    phoneNr: '123 345 876'
  },
  ]
  constructor() { }

  getData() {
    return this.cvDataList
  }
}
