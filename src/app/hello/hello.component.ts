import { Component } from '@angular/core';


@Component({
    selector: 'hello',
    templateUrl: './hello.componente.html'
})
export class HelloComponent {
    nome: string;
    constructor() {
        this.nome = 'Bruno';
    }
}