import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ServicesService } from '../shared/services.service';
import { Services } from '../shared/services';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServicesListComponent implements OnInit {
  p: number = 1;
  Services!: Services[];
  hideWhenNoUsers: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(public serviceApi: ServicesService, public toastr: ToastrService){}

  ngOnInit(){
    this.dataState();
    let s = this.serviceApi.GetServicesList();
    s.snapshotChanges().subscribe((data) => {
      this.Services = [];
      data.forEach((item) => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Services.push(a as Services);
      });
    });
  }

  dataState(){
    this.serviceApi
    .GetServicesList()
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

  deleteService(service){
    if (window.confirm('Você realmente deseja excluir este Serviço?')) {
      this.serviceApi.DeleteService(service.$key);
      this.toastr.success('Usuário Deletado com Sucesso!!');
    }
  }

}


