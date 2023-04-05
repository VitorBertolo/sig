import { Component, OnInit  } from '@angular/core';
import { ClientsService } from '../shared/clients.service';
import { Clients } from '../shared/clients';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  p: number = 1;
  Client!: Clients[];
  hideWhenNoClients: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public clientApi: ClientsService, public toastr: ToastrService){}

  ngOnInit(): void {
    this.dataState();
    let s = this.clientApi.GetClientsList();
    s.snapshotChanges().subscribe((data) => {
      this.Client = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Client.push(a as Clients);
      });
    });
  }

  dataState(){
    this.clientApi
    .GetClientsList()
    .valueChanges()
    .subscribe((data) => {
      this.preLoader = false;
        if (data.length <= 0) {
          this.hideWhenNoClients = false;
          this.noData = true;
        } else {
          this.hideWhenNoClients = true;
          this.noData = false;
        }
    })
  }

  deleteClient(Client){
    if (window.confirm('Você realmente deseja excluir este cliente?')) {
      this.clientApi.DeleteClient(Client.$key);
      this.toastr.success('Cliente Deletado com Sucesso!!');
    }
  }

}