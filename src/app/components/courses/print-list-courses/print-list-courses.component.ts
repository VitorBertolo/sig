import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { Courses } from '../shared/courses';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-print-list-courses',
  templateUrl: './print-list-courses.component.html',
  styleUrls: ['./print-list-courses.component.scss']
})
export class PrintListCoursesComponent implements OnInit {

  Course!: Courses[];
  hideWhenNoUsers: boolean = false;

  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public courseApi: CoursesService, public toastr: ToastrService){}

  ngOnInit(){
    this.dataState();
    let s = this.courseApi.GetCoursesList();
    s.snapshotChanges().subscribe((data) => {
      this.Course = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Course.push(a as Courses);
      });
    });
  }

  dataState(){
    this.courseApi
    .GetCoursesList()
    .valueChanges()
    .subscribe((data) => {
      this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoUsers = false;
          this.noData = true;
        } else {
          this.hideWhenNoUsers = true;
          this.noData = false;
        }
    })
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Lista_Avulsa.pdf');
    });
  }

}
