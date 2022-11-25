import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from './services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

  cats: any = [];
  res: any;
  langs: any;
  data: any;
  cat: any = {
    id_language :'',
    resume: '',
    detail: '',
    principal: '',
    activity: '',
    actions: '',
    quality: '',
    image: '',
  };
  checkSameValue:any;   //initialised before constructor

  @ViewChild('fm') form: NgForm;
  editMode: boolean = false;
  constructor(private service: CategorieService) { }

  ngOnInit(): void {
    this.getlangData();
    this.getcatData();
  }
  displayCondition(checkValue:any, elementValue:any) {
    if (this.checkSameValue && this.checkSameValue == checkValue) {
      return false;
    }
    if (checkValue == elementValue) {
      this.checkSameValue = checkValue;
      return true;
    }
  }
  getcatData() {
    this.service.getData().subscribe(cat => {
      this.cats = cat;
      this.res = this.cats.data;
      console.log(this.res);
    })
  } getlangData() {
    this.service.getlang().subscribe(cat => {
      this.langs = cat.data;
      console.log(this.langs);
    })
  }
  deletecategory(id: any) {
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
      this.cats = this.data;
      console.log(this.cats);
    })
  }
  udpateData() {
    this.service.updateData(this.cat).subscribe(res => {
      this.videInput();
      this.editMode = false;
    })
  }
  insertData() {
    if (!this.editMode) {
      this.service.insertData(this.cat)
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
    this.cat = {
      id_language: '',
      resume: '',
      detail: '',
      principal: '',
      activity: '',
      actions: '',
      quality: '',
      image: '',
    }
  }
  editData(data: any) {
    this.cat = data;
    this.editMode = true;
  }

}
