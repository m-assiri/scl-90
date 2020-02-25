import { Component, OnInit } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import {data,tb1,tb2} from '../data';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  private db = new NgxIndexedDB('myDb', 1);
  objectStore:any;
result:any={};
data:string[]= data;
 tbl = tb1;
 patientNumber;
 patient;
  constructor(private router:Router) { 
    this.db.openDatabase(1, evt => {
      evt.currentTarget.result.createObjectStore('result', { keyPath: 'patientNumber'});
   });
  }

  async ngOnInit() {
    await this.db.openDatabase(1);
     this.patientNumber=await localStorage.getItem('patientNumber')
     let data=await this.db.getByKey('result', this.patientNumber);
     this.patient=data;
    //  console.log(this.patient)
  }
  async calc(){
  
    

      if(Object.keys(this.result).length !=data.length)  {
       // alert("Questions are not completed");  /////////////////////////////
      //  Swal.fire("Questions are not completed");
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'you did not complete the 90 questions',
        showConfirmButton: false,
        timer: 4500
      })
      return
   
      }
 
      const g1=[1,4,12,27,40,42,48,49,52,53,56,58];
      const g2=[3,9,10,28,38,45,46,51,55,65]
      const g3=[6,21,34,36,37,41,61,69,73]
      const g4=[5,14,15,20,22,26,29,30,31,32,54,71,79]
      const g5=[2,17,23,33,39,57,72,78,80,86]
      const g6=[11,24,63,67,74,81]
      const g7=[13,25,47,50,70,75,82]
      const g8=[8,18,43,68,76,83]
      const g9=[7,16,35,62,77,84,85,87,88,90]
      const g10=[19,44,59, 60,64,66,89]
      let t1=0,t2=0,t3=0,t4=0,t5=0,t6=0,t7=0,t8=0,t9=0,t10=0;
   
   
      Object.keys(this.result).map((key)=> {
       if (g1.includes(parseInt( key))) t1+=parseInt(this.result[key])
       if (g2.includes(parseInt( key))) t2+=parseInt(this.result[key])
       if (g3.includes(parseInt( key))) t3+=parseInt(this.result[key])
       if (g4.includes(parseInt( key))) t4+=parseInt(this.result[key])
       if (g5.includes(parseInt( key))) t5+=parseInt(this.result[key])
       if (g6.includes(parseInt( key))) t6+=parseInt(this.result[key])
       if (g7.includes(parseInt( key))) t7+=parseInt(this.result[key])
       if (g8.includes(parseInt( key))) t8+=parseInt(this.result[key])
       if (g9.includes(parseInt( key))) t9+=parseInt(this.result[key])
       if (g10.includes(parseInt( key))) t10+=parseInt(this.result[key])
      });
      let t0=0;
      Object.keys(this.result).map(key => {
        if(parseInt(this.result[key])==0){
          t0 +=1;
        }
      })
      let v1=t1/g1.length,v2=t2/g2.length,v3=t3/g3.length, v4=t4/g4.length,v5=t5/g5.length,v6=t6/g6.length,v7=t7/g7.length,v8=t8/g8.length,v9=t9/g9.length,v10=t10/g10.length;
      let gt=t1+t2+t3+t4+t5+t6+t7+t8+t9+t10;
      let gsi=gt/this.data.length;
      let pst=this.data.length-t0;
    let v1r=0,v2r=0,v3r=0,v4r=0,v5r=0,v6r=0,v7r=0,v8r=0,v9r=0,v10r=0,psdi=0;
    /*
      v1=2.5;
      v2=2.60;
      v3=3.22;
      v4=2.92;
      v5=3;
      v6=2;
      v7=2.43;
      v8=2.83;
      v9=2.70;
      v10=2.5;
      gt=244;
      gsi=2.71;
      pst=88;
     */
      psdi=gt/pst ;
      v10r=t10
      let tbl=tb1;
      if((<any>this.patient).sex==="Female"){
        tbl=tb2
      }
      for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v1) {
          v1r=tbl[i-1][1];
           break;
          }
       }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v2) {
          v2r=tbl[i-1][2];
            break;
          }
        }
   
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v3) {
          v3r=tbl[i-1][3];
            break;
          }
        }
   
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v4) {
          v4r=tbl[i-1][4];
            break;
          }
        }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v5) {
          v5r=tbl[i-1][5];
            break;
          }
        }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v6) {
          v6r=tbl[i-1][6];
            break;
          }
        }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v7) {
          v7r=tbl[i-1][7];
            break;
          }
        }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v8) {
          v8r=tbl[i-1][8];
            break;
          }
        }
        for (let i=0;i<tbl.length;i++){
          if(tbl[i][0]>v9) {
          v9r=tbl[i-1][9];
            break;
          }
        }
   
   
   
     for (let i=0;i<tbl.length;i++)
          if(tbl[i][12]>pst) {
           pst=tbl[i-1][13];
            break;
          }
   
          for (let i=0;i<tbl.length;i++){
            if(tbl[i][0]>gsi) {
            gsi=tbl[i-1][10];
              break;
            }
          }
   
          for (let i=0;i<tbl.length;i++)
          if(tbl[i][0]>psdi) {
           psdi=tbl[i-1][11];
   
            break;
          }
   
   
   
   
   
     let rec={v1r,v2r,v3r,v4r,v5r,v6r,v7r,v8r,v9r,v10r,gt,gsi,pst,psdi};
   
   
      // console.dir(rec);
      this.db.update('result', {...this.patient,...rec}).then(() => {
        // alert("Successfully Registered");
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: 'Information Recorded successfully',
          showConfirmButton: false,
          timer: 2500
        })

       this.router.navigate(['results']);
    }, (error) => {
        console.log(error);
   
    });
    }
    radioChange(event) {
     this.result[event.target.name]=event.target.value;
   
    }
}
