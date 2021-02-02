import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    
        <h3>{{ titulo }}</h3>  

        <h3>La Base es: <strong>{{base}}</strong></h3>

        <button (click)='acumular( base )' >+ {{base}}</button>

        <span  > {{ numero }} </span>

        <button (click)='acumular( -base )' >- {{base}}</button>

    `

})
export class ContadorComponent{

    titulo:string = 'Acumulador App';
    numero:number = 0
    base:number   = 5;
  
    acumular( valor:number ){
  
      this.numero += valor;
  
    }

}