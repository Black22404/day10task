
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formprojects';
  formData = { name: '', email: '', message: '' };

  submitForm(): void {
    console.log('Form submitted:', this.formData);
  }
}
