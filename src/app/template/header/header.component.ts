<<<<<<< HEAD
import { Component, ViewChild } from "@angular/core";
import { AuthService } from "src/app/pages/home/auth.service";
import { Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
=======
import { Component } from '@angular/core';
import { AuthService } from 'src/app/pages/home/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
})
export class HeaderComponent {
  mostrarMenu: boolean = false;
  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    this.AuthService.mostrarMenuEmitter.subscribe(
      (mostrar) => (this.mostrarMenu = mostrar)
    );
  }
<<<<<<< HEAD

  menuOpen = false; // define the menuOpen property here

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  reload() {
    location.reload();
  }


}
