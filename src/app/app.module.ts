import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { KlesMaterialDynamicformsModule } from 'kles-material-dynamicforms';
import { MaterialModule } from './modules/material.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KlesNgPipeModule} from '@3kles/kles-ng-pipe';
import localeFr from '@angular/common/locales/fr';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SelectTriggerComponent } from './select/select-trigger.component';
import { SelectOptionComponent } from './select/select-option.component';
registerLocaleData(localeFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
        }
      }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
