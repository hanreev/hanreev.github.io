import { Component, OnInit } from '@angular/core';

import { elementsObserver } from '../helpers';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  socials: Array<any>;
  portfolios: any[] = [];

  constructor(public settings: SettingsService) {
    this.socials = Object.values(settings.social);
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
