import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
})
export class AddUsersComponent implements OnInit {


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  public userForm!: FormGroup;

  constructor(
    public usersApi: UsersService,
    public fb: FormBuilder,
    public toastr: ToastrService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.usersApi.GetUsersList();
    this.useForm();
  }

  useForm() {
    this.userForm = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      telefone: [''],
      funcao: [''],
    });
  }

  get nome() {
    return this.userForm.get('nome');
  }

  get email() {
    return this.userForm.get('email');
  }

  get senha() {
    return this.userForm.get('senha');
  }

  get telefone() {
    return this.userForm.get('telefone');
  }

  get funcao() {
    return this.userForm.get('funcao');
  }

  resetForm() {
    this.userForm.reset();
  }

  submitUsersData() {
    this.usersApi.AddUser(this.userForm.value);
    this.toastr.success('Usuário Criado com Sucesso!!!');
    this.resetForm();
    this.router.navigate(["/users"]);
  }

}
