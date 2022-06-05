import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Christian';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Christian'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando.'
  };

  cambiarCliente() {
    if(this.genero === 'femenino') {
      this.nombre = 'Christian';
      this.genero = 'masculino';
    } else {
      this.nombre = 'Katty';
      this.genero = 'femenino';
    }
  }

  borrarCliente() {
    if(this.clientes.length === 0) {
      this.clientes = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Christian'];
    } else {
      this.clientes.pop();
    }
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Christian',
    edad: 40,
    direccion: 'Quito, Ecuador'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    }
  ];
}
