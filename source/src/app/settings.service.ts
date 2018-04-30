import { Injectable } from '@angular/core';
import { TRANSLATE } from './helpers';


@Injectable()
export class SettingsService {

  site = {
    name: 'Hanreev',
    description: TRANSLATE('settings.site.description'),
    author: "Rifa'i M. Hanif",
  };

  profile = {
    name: "Rifa'i M. Hanif",
    title: TRANSLATE('settings.profile.title'),
  };

  social = {
    facebook: {
      icon: 'ti-facebook',
      url: 'https://www.facebook.com/hanreev',
      tooltip: TRANSLATE('settings.social.facebook.tooltip'),
    },
    instagram: {
      icon: 'ti-instagram',
      url: 'https://www.instagram.com/hanreev/',
      tooltip: TRANSLATE('settings.social.instagram.tooltip'),
    },
    twitter: {
      icon: 'ti-twitter-alt',
      url: 'https://twitter.com/hanreev',
      tooltip: TRANSLATE('settings.social.twitter.tooltip'),
    },
    gplus: {
      icon: 'ti-google',
      url: 'https://plus.google.com/+HanifRifai41',
      tooltip: TRANSLATE('settings.social.gplus.tooltip'),
    },
    github: {
      icon: 'ti-github',
      url: 'https://github.com/hanreev',
      tooltip: TRANSLATE('settings.social.github.tooltip'),
    },
    youtube: {
      icon: 'ti-youtube',
      url: 'https://www.youtube.com/channel/UCZu2KjGe99__Qitz0MwTR1A',
      tooltip: TRANSLATE('settings.social.youtube.tooltip'),
    },
  };

  skills = [
    { name: 'C++', progress: 75, style: 'default' },
    { name: 'Python', progress: 95, style: 'warning' },
    { name: 'PHP', progress: 95, style: 'purple' },
    { name: 'Ruby', progress: 75, style: 'danger' },
    { name: 'Java', progress: 70, style: 'pink' },
    { name: 'JavaScript', progress: 95, style: 'orange' },
    { name: 'Django & GeoDjango', progress: 85, style: 'green' },
    { name: 'Laravel', progress: 95, style: 'primary' },
    { name: 'Ruby on Rails', progress: 60, style: 'danger' },
    { name: 'GeoServer', progress: 75, style: 'green' },
    { name: 'Vue', progress: 75, style: 'teal' },
    { name: 'Angular', progress: 85, style: 'red' },
    { name: 'React', progress: 60, style: 'blue' },
    { name: 'Mapping JS (OpenLayers, Leaflet, Google Maps JS)', progress: 90, style: 'cyan' },
    { name: 'RDBMS (MySQL, PostgreSQL, SQLite)', progress: 95, style: 'indigo' },
    { name: 'Git', progress: 90, style: 'gray-dark' },
    { name: 'Linux Administration', progress: 90, style: 'blue' },
  ];

  update(obj) {
    for (let key in obj) {
      if (this.hasOwnProperty(key) && typeof obj[key] === 'object') {
        if (key === 'social') {
          for (let k in obj[key]) {
            Object.assign(this[key][k], obj[key][k]);
          }
        } else {
          Object.assign(this[key], obj[key]);
        }
      }
    }
  }

}
