// import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationAComponent } from './location-a.component';
import { scopeLoader } from 'scoped-translations';

// const routes = [
//   {
//     path: '',
//     component: LocationAComponent
//   }
// ];
const scope = 'compA';
@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: scope,
        loader: scopeLoader((lang, root) => {
          return import(`./${root}/${lang}.json`)
          // .then(() => console.log(`i18nScopeLoader: imported './${root}/${lang}.json' for Scope: ${scope}`))
          // .catch(e => console.log(`i18nScopeLoader: failed to import './${root}/${lang}.json' for Scope: ${scope}`, e))
        })
      }, multi: true
    }
  ],
  declarations: [LocationAComponent],
  exports: [LocationAComponent]
})
export class TranslocoLibAModule { }
