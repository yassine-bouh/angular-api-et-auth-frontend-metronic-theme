import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AxeService } from './services/axe.service';

@Component({
  selector: 'app-axe',
  templateUrl: './axe.component.html',
  styleUrls: ['./axe.component.scss']
})
export class AxeComponent implements OnInit {
  axes: any = [];
  res: any;
  data: any;
  axe: any = {
    resume: ''
  };
  @ViewChild('fm') form: NgForm;
  editMode: boolean = false;
  constructor(private service: AxeService) { }

  ngOnInit(): void {
    this.getaxesData();
  }
  getaxesData() {
    this.service.getData().subscribe(axe => {
      this.axes = axe;
      this.res = this.axes.data;
      console.log(this.res);
    })
  }
  deleteAxes(id: any) {
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
      this.axes = this.data;
      console.log(this.axes);
    })
  }
  udpateData() {
    this.service.updateData(this.axe).subscribe(res => {
      this.videInput();
      this.editMode = false;
    })
  }
  insertData() {
    if (!this.editMode) {
      this.service.insertData(this.axe)
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
    this.axe = {
      resume: ''
    }
  }
  editData(data: any) {
    this.axe = data;
    this.editMode = true;
  }

}
