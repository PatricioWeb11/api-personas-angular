import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { Router, ActivatedRoute } from '@angular/router';

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

  params = this.activatedRoute.snapshot.params;
  edit: boolean = false;

  constructor(
      private personaService: PersonaService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    if(this.params){
      console.log('si viene parametro');
    }else{
      console.log('no viene parametro');
    }

    // if(this.params){
    //   this.personaService.getPersona(this.params.id)
    //   .subscribe(
    //     res => {
    //       this.persona = res;
    //       this.edit = true;
    //     }
    //   )
    // }
    // if(this.params){
    //   this.personaService.getPersona(this.params.id)
    //   .subscribe(
    //     res => {
    //       this.persona = res;
    //       this.edit = true;
    //     }
    //   )
    // }
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

  updatePersona(){
    this.personaService.updatePersona(this.persona._id!, this.persona)
    .subscribe(
      res => {
        console.log(res),
        this.router.navigate(['/'])
      },
      err => console.log(err)
    );
  }

}
