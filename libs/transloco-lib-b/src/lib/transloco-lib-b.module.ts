import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { scopeLoader } from '../../../../scoped-translations';
import { LocationBComponent } from './location-b.component';
import { LocationB2Component } from './location-b2.component';

const scope = 'compB';
@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: scope,
        loader: scopeLoader((lang, root) => {
          const importPromise = import(`./${root}/${lang}.json`);
          importPromise.then(() => console.log(`i18nScopeLoader: imported './${root}/${lang}.json' for Scope: ${scope}`))
            .catch(e => console.log(`i18nScopeLoader: failed to import './${root}/${lang}.json' for Scope: ${scope}`, e))
          return importPromise;
        })
      }, multi: true
    }
  ],
  declarations: [LocationBComponent, LocationB2Component],
  exports: [LocationBComponent, LocationB2Component]
})
export class TranslocoLibBModule { }
