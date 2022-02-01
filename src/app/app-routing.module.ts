import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';
import { PersonaListComponent } from './components/persona-list/persona-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonaListComponent
  },
  {
    path: 'personas',
    component: PersonaListComponent
  },
  {
    path: 'personas/create',
    component: PersonaFormComponent
  },
  {
    path: 'personas/edit/:id',
    component: PersonaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
