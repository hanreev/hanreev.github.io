import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { elementsObserver } from '../helpers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  settings: SettingsService;
  socials: Array<any>;

  constructor(private _settings: SettingsService) {
    this.settings = _settings;
    this.socials = Object.values(_settings.social);
  }

  ngOnInit() {
    elementsObserver('#skill-progress .progress-bar', this.settings.skills.length).subscribe(elems => {
      elems.forEach(elem => {
        const val = elem.getAttribute('aria-valuenow');
        (<HTMLElement>elem).style.width = val + '%';
      });
    });
  }

}
