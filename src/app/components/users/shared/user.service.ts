import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { User, Order } from './user';
=======
import { User } from './user';
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
=======
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8

@Injectable({
  providedIn: 'root',
})
export class UsersService {
<<<<<<< HEAD

  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase,private afs: AngularFirestore) {
  }
=======
  usersRef!: AngularFireList<any>;
  userRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8

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
<<<<<<< HEAD

  // Add Order for User
  addOrder(userId: string, order: Order) {
    const orderRef = this.db.object<Order>(`users-list/${userId}/orders/${order.id}`);
    return orderRef.set(order);
  }
  

  // Fetch Orders List for User
  getOrdersByUser(userId: string) {
    return this.db.list(`users/${userId}/orders`).valueChanges();
  }

  // Update Order for User
  updateOrder(userId: string, orderId: string, order: Order) {
    this.userRef = this.db.object<User>('users-list/' + userId);
    return this.userRef.update({
      orders: {
        [orderId]: order
      }
    });
  }

  // Delete Order for User
  deleteOrder(userId: string, orderId: string) {
    this.userRef = this.db.object<User>('users-list/' + userId);
    return this.userRef.update({
      orders: {
        [orderId]: null
      }
    });
  }

}

=======
}
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
