import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReponseService } from './services/reponse.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.scss']
})
export class ReponseComponent implements OnInit {
  resps: any = [];
  res: any;
  weights: any;
  quest: any;
  data: any;
  resp: any = {
    id_question: '',
    id_weight: '',

  };
  checkSameValue: any;   //initialised before constructor

  @ViewChild('fm') form: NgForm;
  editMode: boolean = false;
  constructor(private service: ReponseService) { }

  ngOnInit(): void {
    this.getresData();
    this.getqueData();
    this.getweiData();

  }
  displayCondition(checkValue: any, elementValue: any) {
    if (this.checkSameValue && this.checkSameValue == checkValue) {
      return false;
    }
    if (checkValue == elementValue) {
      this.checkSameValue = checkValue;
      return true;
    }
  }
  getresData() {
    this.service.getData().subscribe(que => {
      this.data = que;
      this.resps = this.data.data;
      console.log(this.resps);
    })
  } getqueData() {
    this.service.getque().subscribe(cat => {
      this.quest = cat.data;
      console.log(this.quest);
    })
  } getweiData() {
    this.service.getwei().subscribe(cat => {
      this.weights = cat.data;
      console.log(this.weights);
    })
  }
  deleteresponse(id: any) {
    console.log(id);
    this.service.delete(id).subscribe(
      () => {
        this.res = this.res.filter((myV: { id: any; }) => myV.id != id);
        console.log(this.res);
      });
  }
  getDataById(id: any) {
    this.service.getDataById(id).subscribe(res => {

      this.data = res;
      this.resps = this.data;
      console.log(this.resps);
    })
  }
  udpateData() {
    this.service.updateData(this.resp).subscribe(res => {
      this.videInput();
      this.editMode = false;
    })
  }
  insertData() {
    if (!this.editMode) {
      this.service.insertData(this.resp)
        .subscribe((res: any) => {
          console.log(res);
          this.videInput();
        });
    } else {
      this.udpateData();
    }
    this.editMode = false;
  }
  videInput() {
    this.resp = {
      id_question: '',
      id_category: '',
    }
  }
  editData(data: any) {
    this.resp = data;
    this.editMode = true;
  }


}
