import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICreateAccount } from '../../../../wizards/create-account.helper';
import { QuestionService } from '../../../question/services/question.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit {
  @Input('updateParentModel') updateParentModel: (
    part: Partial<ICreateAccount>,
    isFormValid: boolean
  ) => void;
  form: FormGroup;
  @Input() defaultValues: Partial<ICreateAccount>;

  private unsubscribe: Subscription[] = [];

  constructor(private fb: FormBuilder, private service: QuestionService) {}

  ngOnInit() {
    this.getqueData();
    this.getlangData();
    this.getcatData();
    this.initForm();
    this.updateParentModel({}, this.checkForm());
  }

  initForm() {
    this.form = this.fb.group({
      businessName: [this.defaultValues.businessName, [Validators.required]],
      businessDescriptor: [
        this.defaultValues.businessDescriptor,
        [Validators.required],
      ],
      businessType: [this.defaultValues.businessType, [Validators.required]],
      businessDescription: [this.defaultValues.businessDescription],
      businessEmail: [
        this.defaultValues.businessEmail,
        [Validators.required, Validators.email],
      ],
    });

    const formChangesSubscr = this.form.valueChanges.subscribe((val) => {
      this.updateParentModel(val, this.checkForm());
    });
    this.unsubscribe.push(formChangesSubscr);
  }

  checkForm() {
    return !(
      this.form.get('businessName')?.hasError('required') ||
      this.form.get('businessDescriptor')?.hasError('required') ||
      this.form.get('businessType')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('required') ||
      this.form.get('businessEmail')?.hasError('email')
    );
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

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

  @ViewChild('fm') forme: NgForm;
  editMode: boolean = false;


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
  } getcatData() {
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
