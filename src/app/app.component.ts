import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona('francisco', 'leon'), new Persona('pedro', 'perez')];
  existe = false;

  onPersonaAgregada(persona: Persona) {
    for (const key of this.personas) {
      if (key.nombre === 'francisco') {
        console.log('esta el wn');
        this.existe = true;
      }
    }
    this.personas.push(persona);
  }
}
