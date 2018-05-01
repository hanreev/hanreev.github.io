import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { TRANSLATE } from '../helpers';
import { ContactModel } from '../contact.model';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  placeholder = {
    name: TRANSLATE('placeholder.name'),
    email: TRANSLATE('placeholder.email'),
    subject: TRANSLATE('placeholder.subject'),
    message: TRANSLATE('placeholder.message'),
  };

  validation = {
    errors: {
      email: TRANSLATE('validation.errors.email'),
      maxlength: TRANSLATE('validation.errors.maxlength'),
      minlength: TRANSLATE('validation.errors.minlength'),
      other: TRANSLATE('validation.errors.other'),
      required: TRANSLATE('validation.errors.required'),
    }
  }

  model = new ContactModel();

  afdMessages: any;

  successMessage = null;

  constructor(private translate: TranslateService, private afd: AngularFireDatabase) {
    this.afdMessages = afd.list('/messages');
    /*
    this.afdMessages.snapshotChanges().subscribe(res => {
      console.log(res);
    });
    */
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe(result => {
      if (Object.keys(result.translations).indexOf('placeholder') !== -1) {
        Object.assign(this.placeholder, result.translations.placeholder);
      }

      if (Object.keys(result.translations).indexOf('validation') !== -1) {
        Object.assign(this.validation, result.translations.validation);
      }
    });
  }

  errorMessage(field: NgModel) {
    let message;
    const params = {};

    if (field.errors.required) {
      message = this.validation.errors.required;
    } else if (field.errors.email) {
      message = this.validation.errors.email;
    } else if (field.errors.minlength) {
      message = this.validation.errors.minlength.replace(/{{\s?minlength\s?}}/, field.errors.minlength.requiredLength);
    } else if (field.errors.maxlength) {
      message = this.validation.errors.maxlength.replace(/{{\s?maxlength\s?}}/, field.errors.maxlength.requiredLength);
    } else if (field.errors.error) {
      message = field.errors.error;
    } else {
      message = this.validation.errors.other;
    }

    return message;
  }

  sendMessage(form: NgForm) {
    if (form.valid) {
      this.afdMessages.push(this.model);
      form.reset();
      this.translate.get(TRANSLATE('contact-success')).subscribe(res => {
        this.successMessage = res;
        setTimeout(() => { this.successMessage = null; }, 10000);
      });
    }
  }

}
