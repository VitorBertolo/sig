<<<<<<< HEAD
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { UsersService } from "../shared/user.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable, map, startWith } from "rxjs";

@Component({
  selector: "app-add-users",
  templateUrl: "./add-users.component.html",
  styleUrls: ["./add-users.component.scss"],
=======
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss'],
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
})
export class AddUsersComponent implements OnInit {
  public userForm!: FormGroup;

<<<<<<< HEAD
  itemName: string;
  itemTags: string[] = [];
  tagCtrl = new FormControl();
  allTags: Observable<string[]>;
  separatorKeysCodes: number[] = [13, 188];
  itemCategory: string;
  fruitCtrl = new FormControl("");
  filteredFruits: Observable<string[]>;
  allFruits: string[] = ["Apple", "Lemon", "Lime", "Orange", "Strawberry"];
  @ViewChild("fruitInput") fruitInput: ElementRef<HTMLInputElement>;
  selectedFruits: any;
  UsersService: any;


=======
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
  constructor(
    public usersApi: UsersService,
    public fb: FormBuilder,
    public toastr: ToastrService,
<<<<<<< HEAD
    private router: Router,
    private _formBuilder: FormBuilder,
    private db: AngularFireDatabase,
    private firebaseService: UsersService
  ) {
  }
=======
    private router: Router
  ) {}
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8

  ngOnInit(): void {
    this.usersApi.GetUsersList();
    this.useForm();
  }

  useForm() {
    this.userForm = this.fb.group({
<<<<<<< HEAD
      nome: [""],
      email: [""],
      senha: [""],
      telefone: [""],
      funcao: [""],
=======
      nome: [''],
      email: [''],
      senha: [''],
      telefone: [''],
      funcao: [''],
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
    });
  }

  get nome() {
<<<<<<< HEAD
    return this.userForm.get("nome");
  }

  get email() {
    return this.userForm.get("email");
  }

  get senha() {
    return this.userForm.get("senha");
  }

  get telefone() {
    return this.userForm.get("telefone");
  }

  get funcao() {
    return this.userForm.get("funcao");
=======
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
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
  }

  resetForm() {
    this.userForm.reset();
  }

  submitUsersData() {
    this.usersApi.AddUser(this.userForm.value);
<<<<<<< HEAD
    this.toastr.success("Usuário Criado com Sucesso!!!");
    this.resetForm();
    this.router.navigate(["/users"]);
  }
 
=======
    this.toastr.success('Usuário Criado com Sucesso!!!');
    this.resetForm();
    this.router.navigate(["/users"]);
  }
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
}
