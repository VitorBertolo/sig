import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/courses.service';
import { Courses } from '../shared/courses';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  p: number = 1;
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
  
  deleteCourse(course){
    if (window.confirm('Você realmente deseja excluir este Treinamento?')) {
      this.courseApi.DeleteCourse(course.$key);
      this.toastr.success('Treinamento Deletado com Sucesso!!');
    }
  }

}
