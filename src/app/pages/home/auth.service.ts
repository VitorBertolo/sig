import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario) {
    if (
      usuario.nome === 'suporte@prosegmt.com.br' &&
      usuario.senha === 'proseg2441'
    ) {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.router.navigate(['/start']);
    } else {
      if (usuario.nome === 'teste@gmail.com' && usuario.senha === '123') {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/start']);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
<<<<<<< HEAD
      } 
    }
  }
 
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado
  }
=======
      }
    }
  }
>>>>>>> d3f1f4f3fb7b35e762131298bc1ad545b27402e8
}
