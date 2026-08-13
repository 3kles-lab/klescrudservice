import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";

registerLocaleData(localeFr);
export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi())
    ]
};
