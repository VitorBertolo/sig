import { Injectable } from '@angular/core';
import { User } from './user';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Users
  AddUser(user: User) {
    this.usersRef.push({
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      telefone: user.telefone,
      funcao: user.funcao,
    });
  }

  // Fetch Single Users Object
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }

  // Fetch Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }

  // Update Users Object
  UpdateUser(user: User) {
    this.userRef.update({
      nome: user.nome,
      email: user.email,
      senha: user.senha,
      telefone: user.telefone,
      funcao: user.funcao,
    });
  }

  //Delete Users Object
  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    this.userRef.remove();
  }
}
