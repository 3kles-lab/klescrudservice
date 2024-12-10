import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { KlesCrudService } from './kles-crud-service.service';




@NgModule({ declarations: [],
    exports: [], imports: [CommonModule], providers: [KlesCrudService, provideHttpClient(withInterceptorsFromDi())] })
export class KlesCrudServiceModule { }
