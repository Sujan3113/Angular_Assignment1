import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  formSubmitted = false;

  contactData = {
    name: '',
    address: '',
    phone: ''
  };

  onSubmit() {
    if (this.contactForm.valid) {
      localStorage.setItem('contactDetails', JSON.stringify(this.contactData));
      this.formSubmitted = true;
      this.contactForm.resetForm();
    }
  }
}