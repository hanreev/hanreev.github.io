import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  settings: SettingsService;

  constructor(private _settings: SettingsService) {
    this.settings = _settings;
  }

  ngOnInit() {
  }

}
