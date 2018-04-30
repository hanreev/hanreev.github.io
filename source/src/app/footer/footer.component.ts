import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  settings: SettingsService;
  date = new Date();

  constructor(private _settings: SettingsService) {
    this.settings = _settings;
  }

  ngOnInit() {
  }

}
