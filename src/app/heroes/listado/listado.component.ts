import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Hulk',
    'Thor',
    'Ironman',
    'Capitan America',
  ];

  public heroeBorrado: string = '';
  public borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || 'No hay Héroes que borrar';

  }
}
