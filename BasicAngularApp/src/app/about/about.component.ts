import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  contactDetails: any;

  ngOnInit() {
    const details = localStorage.getItem('contactDetails');
    if (details) {
      this.contactDetails = JSON.parse(details);
    }
  }
}
