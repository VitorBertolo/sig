import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/user.service';
import { User } from '../shared/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit  {
  p: number = 1;
  User!: User[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public userApi: UsersService, public toastr: ToastrService){}

  ngOnInit(){
    this.dataState();
    let s = this.userApi.GetUsersList();
    s.snapshotChanges().subscribe((data) => {
      this.User = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.User.push(a as User);
      });
    });
  }

  dataState(){
    this.userApi
    .GetUsersList()
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

  deleteUser(user){
    if (window.confirm('Você realmente deseja excluir este usuário?')) {
      this.userApi.DeleteUser(user.$key);
      this.toastr.success('Usuário Deletado com Sucesso!!');
    }
  }
  
}
