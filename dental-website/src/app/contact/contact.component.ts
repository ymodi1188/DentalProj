import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  showDoctorInfo: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern("\\+\\d{1,3}\\s\\d{1,10}")]],
      message: ['']
    });
  }

  onSubmit() {
    console.log('Form Submission', this.contactForm.value);
  }

  toggleDoctorInfo(show: boolean) {
    this.showDoctorInfo = show;
  }
}
