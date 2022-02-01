import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.css']
})
export class PersonaListComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    return this.personaService.getPersonas()
    .subscribe(
      res => {
        this.personas = res
      },
      err => console.log(err)
    )
  }

}
