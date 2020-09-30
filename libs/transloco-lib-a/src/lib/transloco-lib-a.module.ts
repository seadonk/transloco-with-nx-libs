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
@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'compA',
        loader: scopeLoader((lang, root) => import(`./${root}/${lang}.json`))
      }, multi: true
    }
  ],
  declarations: [LocationAComponent],
  exports: [LocationAComponent]
})
export class TranslocoLibAModule { }
