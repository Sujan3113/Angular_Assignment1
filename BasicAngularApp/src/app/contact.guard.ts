import { CanDeactivateFn } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

export const canDeactivateContact: CanDeactivateFn<ContactComponent> = (component) => {
  if (component.contactForm?.dirty && !component.formSubmitted) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};