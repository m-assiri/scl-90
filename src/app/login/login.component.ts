import { Component, OnInit } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private db = new NgxIndexedDB('myDb', 1);
  name = '';
  age ='';
  patientNumber ="";
  sex = '';
  socialStatus = '';
  educationLevel = '';
  city='';
  constructor(private router:Router) { 
    this.db.openDatabase(1, evt => {
      evt.currentTarget.result.createObjectStore('result', { keyPath: 'patientNumber'});
   });
  }

  ngOnInit() {
  }
  goMain(){
   // this.router.navigate(['tabs/tab1']);
  }
  go() {
   // this.router.navigate(['tabs/tab2']);
   }
  async save() {
    // let yes = confirm(" هل انت متأكد من بياناتك" );
    Swal.fire({
      position: 'top-end',
      type: 'success',
      title: 'Information Recorded successfully',
      showConfirmButton: false,
      timer: 2500
    })
    let db = new NgxIndexedDB('myDb', 1);
  
    localStorage.setItem('patientNumber',this.patientNumber.toString());
   
    await this.db.openDatabase(1);
    let rec={name: this.name,age:this.age,patientNumber:this.patientNumber,sex:this.sex,socialStatus:this.socialStatus,educationLevel:this.educationLevel,city:this.city};

     let foundRec=await this.db.getByKey('result', (this.patientNumber))
     if (foundRec){
      localStorage.setItem('patientNumber',this.patientNumber.toString());
      this.db.update('result', {...foundRec,...rec})
      //alert("رقم الملف موجود سابقاً");
      this.router.navigate(['questions']);
     } else{
    
    await this.db.add('result', rec);
    this.router.navigate(['questions']);
     }
    



}
}
