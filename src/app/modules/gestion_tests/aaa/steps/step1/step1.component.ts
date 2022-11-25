import { Component, Input, OnDestroy, OnInit, ViewChild,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../../../wizards/create-account.helper';
import { TestService } from '../../../test/services/test.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnInit, OnDestroy {

  tests: any = [];
  res: any = [];
  data: any;
  students: any[] = [];
  id_test: any;
  test: any = {
    name: '',
    test_date: '',
  };
  checkSameValue: any;   //initialised before constructor
  @Output() msg = new EventEmitter<string>();

  @ViewChild('fm') forme: NgForm;
  editMode: boolean = false;

  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;
  private unsubscribe: Subscription[] = [];

  constructor (private fb: FormBuilder, private service: TestService) {}

  ngOnInit() {
    this.getStudents();
    this.getTestsData();
    this.initForm();
    this.updateParentModel({}, true);
  }

  initForm() {
    this.form = this.fb.group({
      accountType: [this.defaultValues.accountType, [Validators.required]],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, true);
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
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
  getTestsData() {
    this.service.getData().subscribe(test => {
      this.tests = test;
      this.res = this.tests.data;
      console.log(this.res);
    })
  } getStudents() {
    this.service.getstudents().subscribe(test => {
      this.tests = test;
      this.students = this.tests.students.data;
      console.log(this.students);
    })
  }
  deleteTest(id: any) {
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
      this.tests = this.data;
      console.log(this.tests);
    })
  }
  udpateData() {
    this.service.updateData(this.test).subscribe(res => {
      this.videInput();
      this.editMode = false;
    })
  }
  insertData() {
    if (!this.editMode) {
      this.service.insertData(this.test)
        .subscribe((res: any) => {
          this.id_test = res.id;
          console.log(this.id_test);
          this.msg.emit(this.id_test);
          console.log(res);
          this.editMode = true;
        });
    } else {
      this.udpateData();
    }

  }
  videInput() {
    this.test = {
      test_date: '',
      name: ''
    }
  }
  editData(data: any) {
    this.test = data;
    this.editMode = true;
  }
}


