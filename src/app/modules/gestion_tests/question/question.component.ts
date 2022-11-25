import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  ques: any = [];
  res: any;
  langs: any;
  cats: any;
  data: any;
  que: any = {
    id_language: '',
    id_category: '',
    resume: '',
    detail: '',
    type: '',
  };
  checkSameValue: any;   //initialised before constructor

  @ViewChild('fm') form: NgForm;
  editMode: boolean = false;
  constructor(private service: QuestionService) { }

  ngOnInit(): void {
    this.getqueData();
    this.getlangData();
    this.getcatData();

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
  getqueData() {
    this.service.getData().subscribe(que => {
      this.data = que;
      this.ques = this.data.data;
      console.log(this.ques);
    })
  } getlangData() {
    this.service.getlang().subscribe(cat => {
      this.langs = cat.data;
      console.log(this.langs);
    })
  }getcatData() {
    this.service.getcat().subscribe(cat => {
      this.cats = cat.data;
      console.log(this.cats);
    })
  }
  deletequestion(id: any) {
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
      this.ques = this.data;
      console.log(this.ques);
    })
  }
  udpateData() {
    this.service.updateData(this.que).subscribe(res => {
      this.videInput();
      this.editMode = false;
    })
  }
  insertData() {
    if (!this.editMode) {
      this.service.insertData(this.que)
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
    this.que = {
      id_language: '',
      id_category: '',
      resume: '',
      detail: '',
      type: '',
    }
  }
  editData(data: any) {
    this.que = data;
    this.editMode = true;
  }


}
