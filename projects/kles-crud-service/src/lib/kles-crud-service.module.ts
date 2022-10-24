import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { KlesCrudService } from './kles-crud-service.service';




@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  providers: [KlesCrudService],
  exports: []
})
export class KlesCrudServiceModule { }
