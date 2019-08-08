import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

import { initFormControl } from './helpers';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _router: Router, private translate: TranslateService, private settings: SettingsService) {
    translate.addLangs(['id', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this._router.events.subscribe(route => {
      if (route instanceof NavigationEnd) initFormControl();
    });

    this.translate.onLangChange.subscribe((result: LangChangeEvent) => {
      if (Object.keys(result.translations).indexOf('settings') !== -1)
        this.settings.update(result.translations.settings);
    });
  }
}
