import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string): any[] {

    // SI ESTA VACIO NO APLICAMOS EL FILTRO
    if ( texto === '' ) {
      return arreglo;
    }

    // SI HAY INFO SI APLICAMOS EL FILTRO
    texto = texto.toLowerCase();

     return arreglo.filter( item => {
      return item[columna].toLowerCase().includes( texto );
    });
  }

}
