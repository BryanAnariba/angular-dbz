import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';import { FormsModule } from '@angular/forms';
;

@NgModule({
  // Importaciones de componentes obligatorias
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // Si queremos que salga al exterior exportar
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
