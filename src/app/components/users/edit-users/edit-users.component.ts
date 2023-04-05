import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../shared/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {
  editForm: FormGroup;
  constructor(
    private usersApi: UsersService,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.updateUsersData();
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.usersApi
      .GetUser(id)
      .valueChanges()
      .subscribe((data) => {
        this.editForm.setValue(data);
      });
  }

  get nome() {
    return this.editForm.get('nome');
  }

  get email() {
    return this.editForm.get('email');
  }

  get senha() {
    return this.editForm.get('senha');
  }

  get telefone() {
    return this.editForm.get('telefone');
  }

  get funcao() {
    return this.editForm.get('funcao');
  }

  updateUsersData(){
    this.editForm = this.fb.group({
      nome:[''],
      email:[''],
      senha:[''],
      telefone:[''],
      funcao:[''],
    })
  }

  updateForm(){
    this.usersApi.UpdateUser(this.editForm.value);
    this.toastr.success('Usuário Alterado com Sucesso!!!');
    this.router.navigate(['/users'])
  }
}
