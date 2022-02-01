import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  persona: Persona = {
    nombre: '',
    apellido: '',
    edad: 0
  };

  constructor(
      private personaService: PersonaService,
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  submitPersona(){
    this.personaService.createPersona(this.persona)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/'])
      },
      err => console.log(err)
    );
  }

}
