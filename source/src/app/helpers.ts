import { Observable } from 'rxjs/Observable';

export function TRANSLATE(str: string) {
  return str;
}

export function initFormControl() {
  $('.form-control')
    .on('focus', function() {
      $(this)
        .parent('.input-group')
        .addClass('input-group-focus');
    })
    .on('blur', function() {
      $(this)
        .parent('.input-group')
        .removeClass('input-group-focus');
    });
}

export function elementObserver(selector: string, interval = 200): Observable<Element> {
  return new Observable(subscriber => {
    const observe = () => {
      const element = document.querySelector(selector);
      if (element) {
        subscriber.next(element);
      } else {
        setTimeout(observe, interval);
      }
    };

    observe();
  });
}

export function elementsObserver(selector: string, length = 1, interval = 200): Observable<Element[]> {
  return new Observable(subscriber => {
    const observe = () => {
      const elements = document.querySelectorAll(selector);
      if (elements.length >= length) {
        subscriber.next(Array.from(elements));
      } else {
        setTimeout(observe, interval);
      }
    };

    observe();
  });
}
