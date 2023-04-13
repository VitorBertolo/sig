<<<<<<< HEAD
import { Clients } from "./clients";
import { Injectable } from "@angular/core";
=======
import { Clients } from './clients';
import { Injectable } from '@angular/core';
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
<<<<<<< HEAD
} from "@angular/fire/compat/database";

@Injectable({
  providedIn: "root",
=======
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
})
export class ClientsService {
  clientsRef!: AngularFireList<any>;
  clientRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  // Create Student
  AddClient(clients: Clients) {
    this.clientsRef.push({
      nome: clients.nome,
      cnpj: clients.cnpj,
      responsavel_empresa: clients.responsavel_empresa,
      responsavel_proseg: clients.responsavel_proseg,
      telefone_fixo: clients.telefone_fixo,
      telefone1: clients.telefone1,
      telefone2: clients.telefone2,
      email: clients.email,
      mensal: clients.mensal,
      periodicidade_visitas: clients.periodicidade_visitas,
      item_contrato: clients.item_contrato,
      validade_proc_esocial: clients.validade_proc_esocial,
      vigencia_pgr: clients.vigencia_pgr,
      validade_art: clients.validade_art,
      cep: clients.cep,
      bairro: clients.bairro,
      logradouro: clients.logradouro,
      numero: clients.numero,
      cidade: clients.cidade,
      uf: clients.uf,
    });
  }

  // Fetch Single Student Object
  GetClient(id: string) {
<<<<<<< HEAD
    this.clientRef = this.db.object("clients-list/" + id);
=======
    this.clientRef = this.db.object('clients-list/' + id);
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
    return this.clientRef;
  }

  // Fetch Students List
  GetClientsList() {
<<<<<<< HEAD
    this.clientsRef = this.db.list("clients-list");
=======
    this.clientsRef = this.db.list('clients-list');
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
    return this.clientsRef;
  }

  // Update Student Object
  UpdateClient(clients: Clients) {
    this.clientRef.update({
      nome: clients.nome,
      cnpj: clients.cnpj,
      responsavel_empresa: clients.responsavel_empresa,
      responsavel_proseg: clients.responsavel_proseg,
      telefone_fixo: clients.telefone_fixo,
      telefone1: clients.telefone1,
      telefone2: clients.telefone2,
      email: clients.email,
      mensal: clients.mensal,
      periodicidade_visitas: clients.periodicidade_visitas,
      item_contrato: clients.item_contrato,
      validade_proc_esocial: clients.validade_proc_esocial,
      vigencia_pgr: clients.vigencia_pgr,
      validade_art: clients.validade_art,
      cep: clients.cep,
      bairro: clients.bairro,
      logradouro: clients.logradouro,
      numero: clients.numero,
      cidade: clients.cidade,
      uf: clients.uf,
    });
  }

  // Delete Student Object
  DeleteClient(id: string) {
<<<<<<< HEAD
    this.clientRef = this.db.object("clients-list/" + id);
=======
    this.clientRef = this.db.object('clients-list/' + id);
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
    this.clientRef.remove();
  }
}
