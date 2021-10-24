import { Component } from '@angular/core';


@Component({
    selector: 'hello',
    templateUrl: './hello.componente.html'
})
export class HelloComponent {
    nome: string;
    clientes: Cliente[];
    constructor() {
        this.nome = 'Bruno';
        let fulano = new Cliente('moacir', 12);
        let ciclano = new Cliente('Cláudio', 44);
        this.clientes = [fulano, ciclano];
    }
}

class Cliente{
    constructor(public nome: string, public idade: number){}
}