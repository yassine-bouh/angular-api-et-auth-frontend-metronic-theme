import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../../../wizards/create-account.helper';
import { AxeService } from '../../../axe/services/axe.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
})
export class Step2Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];
    id_test: any;

  constructor(private fb: FormBuilder, private service: AxeService) {

  }

  ngOnInit() {
    this.receive(event);
    this.initForm();
    this.updateParentModel({}, this.checkForm());
    this.getaxesData();

  }
  receive(event: any) {
    this.id_test = event;
    console.log(event);
  }
  initForm() {
    this.form = this.fb.group({

      name: [this.axe.resume, [Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !this.form.get('accountName')?.hasError('required');
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  axes: any = [];
  res: any;
  data: any;
  axe: any = {
    resume: ''
  };
  @ViewChild('fm') forme: NgForm;
  editMode: boolean = false;

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

function e(e: any) {
    throw new Error('Function not implemented.');
}
