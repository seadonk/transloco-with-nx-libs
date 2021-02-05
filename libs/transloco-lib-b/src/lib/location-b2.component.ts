import { Component, OnInit } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { scopeLoader } from 'scoped-translations';

@Component({
  selector: 'transloco-with-libs-b2',
  template: `
    <ng-container *transloco="let t">
      <p>where am I? {{ t('compB2.gps') }}</p>
      <p>where am I? {{ t('compB23.gps') }}</p>
    </ng-container>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'compB2',
        loader: scopeLoader((lang, root) => import(`./${root}/b2/${lang}.json`))
      }, multi: true
    }
  ]
})
export class LocationB2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
