import { Component, OnInit } from '@angular/core';
import { DegreeService } from './services/degree.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss']
})
export class DegreesComponent implements OnInit {
  degrees: any;
  res: any;
  constructor(private degreeService: DegreeService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.showDegrees();
  }
  showDegrees() {
    this.degrees = this.degreeService.listDegree().
      subscribe((degree) => {
        this.degrees = degree;
        this.res = this.degrees.degrees.data;
        console.log(this.res);
      });
  }

  deleteDegree(id: any) {
    console.log(id);
    this.degreeService.delete(id).subscribe({
      next: (data) => {
        console.log(data);
        this.res = this.res.filter((myV: { id: any; }) => myV.id != id);
        console.log(this.res);
      },
      error: (e) => console.error(e)
      });
  }

}
