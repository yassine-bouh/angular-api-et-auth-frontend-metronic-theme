import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AxeService } from '../axe/services/axe.service';
import { QuestionService } from '../question/services/question.service';
import { ReponseService } from '../reponse/services/reponse.service';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

      tests: any = [];  res: any=[];  students: any[] = [];  axes: any = [];  data: any;  ques: any = [];  langs: any;  cats: any;  testcreated: boolean = false;
      que: any = {    id_language: '',    id_category: '',    resume: '',    detail: '',    type: ''  };
      axe: any = {    resume: ''  };
      weight: any = {    resume: '',    w_value: '',    id_language: ''  };
      test: any = {    name: '',    test_date: ''  };
      testAxe: any = {    id_test: '',    id_axe: ''  };
      reponse: any = {    id_que: '',    id_res: ''  }
      tq: any = { id_test: '', id_question: '', score: '' }

      checkSameValue: any;   //initialised before constructor
      @ViewChild('fm') form: NgForm;
      editMode: boolean = false; idAxe: any; idTest: any; idQ: any; idR: any; quecreated: boolean = false; numR: number;

        constructor(private serviceT: TestService, private serviceA: AxeService, private serviceQ: QuestionService, private serviceR: ReponseService) { }

            ngOnInit(): void {
              this.getStudents(); this.getTestsData(); this.getaxesData(); this.getqueData(); this.getlangData(); this.getcatData(); this.gettestaxes();
            }

  //ng if conditions
                tfalse() {
                  this.testcreated = false;
                  this.videInput();  }
                qfalse() {
                  this.quecreated = false;
                }

  // creer test
                insertData() {
                  this.idAxe = this.axe.id;

                  this.serviceT.insertData(this.test)
                    .subscribe((res: any) => {
                      this.test = res;
                      this.idTest = res.id;
                      this.insert(this.idTest, this.idAxe);
                      this.testcreated = true;
                      this.videInput();
                    });
                }

 //creer test axe
                insert(tes: string, ax: string) {
                  this.testAxe = {
                    id_test: tes,
                    id_axe: ax
                  }
                  this.serviceT.insertDataTA(this.testAxe)
                    .subscribe((res: any) => {
                      console.log(res);

                    });
                }
                videInput() {
                  this.test.test_date = '';
                  this.axe.resume = '';
                }

 //creer question
                insertDataQ() {
                    this.serviceQ.insertData(this.que)
                      .subscribe((res: any) => {
                        console.log(res);
                        this.ques = res;
                        this.idQ = res.id;
                        this.insertTQ(this.idTest, this.idQ);
                        this.quecreated = true;
                        this.numR = 0;
                      });
                      this.videInputQ()
                }

 //creer question test
                insertTQ(idt: number, idq: number) {
                  this.tq={
                    id_test: idt,
                    id_question: idq,
                    score: 0
                  }
                    this.serviceT.insertDataTQ(this.tq)
                      .subscribe((res: any) => {
                        console.log(res);
                        this.videInput();
                      });
                }

 //creer reponse
                insertDataR() {
                  this.weight.id_language = this.que.id_language;
                    console.log(this.weight);
 
                    this.serviceR.insertData(this.weight)
                      .subscribe((res: any) => {
                        console.log(res);
                        this.idR = res.id;
                        this.insertR(this.idQ,this.idR);
                        this.videInputR();
                      });
                }

 //creer question reponse
                insertR(idq:number,idr:number) {
                  this.reponse = {
                    id_question: idq,
                    id_weight:idr
                  }
                  console.log(this.reponse);
                  this.serviceR.insertDataR(this.reponse)
                      .subscribe((res: any) => {
                        console.log(res);
                        this.numR += 1;
                        this.videInputR();
                      });
                }
                videInputR() {
                  this.weight.resume = '',
                  this.weight.w_value = ''
                }
                videInputQ() {
                  this.que.id_category= '',
                    this.que.resume= '',
                      this.que.details= '',
                        this.que.type=''
                }

 //  displayCondition
                displayCondition(checkValue: any, elementValue: any) {
                  if (this.checkSameValue && this.checkSameValue == checkValue) {
                    return false;
                  }
                  if (checkValue == elementValue) {
                    this.checkSameValue = checkValue;
                    return true;
                  }
                }

 //GETS
                getTestsData() {
                  this.serviceT.getData().subscribe(test => {
                    this.tests = test;
                    this.res = this.tests.data;
                    console.log(this.res);
                  })
                }
                getStudents() {
                  this.serviceT.getstudents().subscribe(test => {
                    this.tests = test;
                    this.students = this.tests.students.data;
                    console.log(this.students);
                  })
                }
                deleteTest(id: any) {
                  console.log(id);
                  this.serviceT.delete(id).subscribe(
                    () => {
                      this.res = this.res.filter((myV: { id: any; }) => myV.id != id);
                      console.log(this.res);
                    });
                }

 //get axes
                getaxesData() {
                  this.serviceA.getData().subscribe(axe => {
                    this.res = axe;
                    this.axes = this.res.data;
                    console.log(this.axes);
                  })
                }
                gettestaxes() {
                  this.serviceA.gettest().subscribe(axt => {
                    this.testAxe = axt;
                    console.warn(this.testAxe);
                  })
                }

 //get questions lanque et categorie
                getqueData() {
                  this.serviceQ.getData().subscribe(que => {
                    this.data = que;
                    this.ques = this.data.data;
                    console.log(this.ques);
                  })
                }
                getlangData() {
                  this.serviceQ.getlang().subscribe(cat => {
                    this.langs = cat.data;
                    console.log(this.langs);
                  })
                }
                getcatData() {
                  this.serviceQ.getcat().subscribe(cat => {
                    this.cats = cat.data;
                    console.log(this.cats);
                  })
                }
                deletequestion(id: any) {
                  console.log(id);
                  this.serviceQ.delete(id).subscribe(
                    () => {
                      this.res = this.res.filter((myV: { id: any; }) => myV.id != id);
                      console.log(this.res);
                    });
                }
                getDataById(id: any) {
                  this.serviceQ.getDataById(id).subscribe(res => {

                    this.data = res;
                    this.ques = this.data;
                    console.log(this.ques);
                  })
                }
                editDataQ(data: any) {
                  this.que = data;
                  this.editMode = true;
                }
                editData(data: any) {
                  this.test = data;
                  this.editMode = true;
                }
                udpateData() {
                  this.serviceQ.updateData(this.que).subscribe(res => {
                    this.videInput();
                    this.editMode = false;
                  })
                }
}
