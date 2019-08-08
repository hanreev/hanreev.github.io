import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  settings: SettingsService;
  langFlag = 'assets/img/flags/US.png';
  currentLang: string;

  constructor(private translate: TranslateService, private _settings: SettingsService) {
    this.settings = _settings;
  }

  ngOnInit() {
    this.setLangFlag(this.translate.currentLang);
    this.currentLang = this.translate.currentLang;

    this.translate.onLangChange.subscribe(result => {
      this.setLangFlag(result.lang);
      this.currentLang = result.lang;
    });
  }

  setLang(lang: string) {
    if (this.translate.getLangs().indexOf(lang) !== -1) {
      this.translate.use(lang);
    }
  }

  setLangFlag(lang: string) {
    if (this.translate.getLangs().indexOf(lang) !== -1) {
      const flag = lang === 'id' ? 'ID.png' : 'US.png';
      this.langFlag = 'assets/img/flags/' + flag;
    }
  }
}
