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
    if (this.contactForm.valid) {
      console.log('Form Submission', this.contactForm.value);
      this.sendWhatsAppMessage();
    } else {
      console.log('Form is not valid');
    }
  }

  toggleDoctorInfo(show: boolean) {
    this.showDoctorInfo = show;
  }
  goTomaps() { 
    const url = `https://www.google.com/maps/place/DENTIST/@29.9266172,73.342208,10z/data=!4m20!1m13!4m12!1m4!2m2!1d73.7360172!2d29.8185924!4e1!1m6!1m2!1s0x3917b519449aef6b:0xcf4862899804ba57!2saditya+markanday!2m2!1d73.8819871!2d29.9206363!3m5!1s0x3917b519449aef6b:0xcf4862899804ba57!8m2!3d29.9206363!4d73.8819871!16s%2Fg%2F11bbs_yr9d?entry=ttu`;
    window.open(url, '_blank');
  }
 sendWhatsAppMessage() {
  if (this.contactForm.valid) {
    const formData = this.contactForm.value;
    const message = `Name: ${formData.name}, Email: ${formData.email}, Contact: ${formData.contact}, Message: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '9351046766'; // Ensure correct format
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    console.log('WhatsApp URL:', whatsappUrl); // Debugging line
    window.open(whatsappUrl, '_blank');
  } else {
    console.log('Form is not valid');
  }
}
  
}
