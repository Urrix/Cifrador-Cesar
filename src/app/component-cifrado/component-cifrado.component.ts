import { Component } from '@angular/core';

@Component({
  selector: 'app-component-cifrado',
  templateUrl: './component-cifrado.component.html',
  styleUrls: ['./component-cifrado.component.css']
})
export class ComponentCifradoComponent {

  msjCifrado: string = "";
  msjDescifrado: string = "";
  claveK: number = 0;
  mostrarMensaje: boolean = false;
  incluirN: boolean = true;
  bandModo: boolean = true;

  constructor() { }


  cifrarMensaje() {
    this.msjCifrado = ""
    this.msjDescifrado = this.msjDescifrado.toLocaleLowerCase()
    let agregarN = 0
    if (this.incluirN) {
      agregarN = 1;
    }
    for (let i of this.msjDescifrado) {
      let letra = i.charCodeAt(0)
      let ene = false
      if (i != " ") {
        if ((letra < 111 && (letra + this.claveK) >= 111) || i == 'ñ') {
          if (i == 'ñ') {
            letra = 111
          }
          letra = letra - agregarN
          ene = true
        }
        letra += this.claveK
        if (letra > 122) {
          letra = letra - 25
        }
      }
      if (letra == 110 && ene && this.incluirN) {
        this.msjCifrado += 'ñ'
      } else {
        this.msjCifrado += String.fromCharCode(letra)
      }

    }
    this.mostrarMensaje = true;
  }

  descifrarMensaje() {
    this.msjCifrado = ""
    this.msjDescifrado = this.msjDescifrado.toLocaleLowerCase()
    let agregarN = 0
    if (this.incluirN) {
      agregarN = 1;
    }
    for (let i of this.msjDescifrado) {
      let letra = i.charCodeAt(0)
      let ene = false
      if (i != " ") {
        if ((letra >= 111 && (letra - this.claveK) < 111) || i == 'ñ') {
          if (i == 'ñ') {
            letra = 110
          }
          letra = letra + agregarN
          ene = true
        }
        letra -= this.claveK
        if (letra < 97) {
          letra = letra + 25
        }
      }
      if (letra == 111 && ene && this.incluirN) {
        this.msjCifrado += 'ñ'
      } else {
        this.msjCifrado += String.fromCharCode(letra)
      }

    }
    this.mostrarMensaje = true;
  }

  btnClic() {
    if (this.bandModo)
      this.cifrarMensaje()
    else
      this.descifrarMensaje()
  }
}

