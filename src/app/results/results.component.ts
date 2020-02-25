import { Component, OnInit } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  patient;
  patientNumber;
  constructor() { }
  

  async ngOnInit() {
    if(localStorage.getItem('patientNumber')){
    let db = await new NgxIndexedDB('myDb', 1);
    await db.openDatabase(1);
    this.patientNumber=await localStorage.getItem('patientNumber')
    let data=await db.getByKey('result', this.patientNumber);
    this.patient=data;
    } 
  }
  async getResult(){
  //  alert(this.patientNumber);
  //  alert("ok")
    let db = await new NgxIndexedDB('myDb', 1);
    await db.openDatabase(1);
    if(this.patientNumber){
   // this.patientNumber=await Number(localStorage.getItem('patientNumber'))
    let data=await db.getByKey('result', this.patientNumber);
    this.patient=data;
    }else {
   // alert("Enter the patientNumber")
    }
  // console.dir(data)
  }

}
