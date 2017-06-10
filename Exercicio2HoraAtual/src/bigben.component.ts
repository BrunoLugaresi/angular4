import { Component } from '@angular/core';
import { BigBenService } from './bigben.service';

@Component({
  selector: 'big-ben',
  template: '<p> <b>Hora:</b> {{hora}}</p>'+
            '<p> <b>Autores:</b> Bruno Lugaresi e Leonardo Cavalcante '
})
export class BigBenComponent {
  private hora : String;

  constructor(bigBenService: BigBenService) {
    bigBenService.generateHour(1000, horaParametro => this.hora = horaParametro);
  }

}
