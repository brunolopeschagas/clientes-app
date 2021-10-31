import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;

  constructor() { 
    this.cliente = new Cliente(0, 'bruno', '090909', '12/12/202');
  }

  ngOnInit(): void {
  }

}
