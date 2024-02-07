import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  officeHours = [
    { day: 'Monday', time: '9:00AM-5:00PM' },
    { day: 'Tuesday', time: '7:00AM-4:00PM' },
  
      { day: 'Wednesday', time: '8:00AM-11:00AM' },
      { day: 'Thursday', time: '9:00AM-5:00PM' },
       { day: 'Friday', time: '7:00AM-4:00PM' }
  ];
  logoUrl = '/assets/logo.png';
  address = '2b-18 Sukhhhadia nagar Sri ganganagar 335001';
  phone = '9351046766';
  rating = '5.0';
  reviewCount = 200;
  currentYear = new Date().getFullYear();
  socialLinks = [
    { iconClass: 'fab fa-facebook-f', url: 'https://facebook.com' },
    { iconClass: 'fab fa-whatsapp', url: 'https://wa.me/919351046766' },
    { iconClass: 'fa fa-envelope', url: 'mailto:markandaysnigdha.1911@gmial.com' },
  ];
  bottomLinks = [
    { label: 'Sitemap', url: '/sitemap' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    // ...other links
  ];

  goTomaps() { 
    const url = `https://www.google.com/maps/place/DENTIST/@29.9266172,73.342208,10z/data=!4m20!1m13!4m12!1m4!2m2!1d73.7360172!2d29.8185924!4e1!1m6!1m2!1s0x3917b519449aef6b:0xcf4862899804ba57!2saditya+markanday!2m2!1d73.8819871!2d29.9206363!3m5!1s0x3917b519449aef6b:0xcf4862899804ba57!8m2!3d29.9206363!4d73.8819871!16s%2Fg%2F11bbs_yr9d?entry=ttu`;
    window.open(url, '_blank');
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-footer',
//   templateUrl: './footer.component.html',
//   styleUrls: ['./footer.component.css']
// })
// export class FooterComponent {
//   officeHours = [
//     { day: 'Monday', time: '9:00AM-5:00PM' },
//     { day: 'Tuesday', time: '7:00AM-4:00PM' },
//     { day: 'Wednesday', time: '8:00AM-11:00AM' },
//     { day: 'Thursday', time: '9:00AM-5:00PM' },
//     { day: 'Friday', time: '7:00AM-4:00PM' },
//     // Assuming the office is closed on weekends
//   ];

//   bottomLinks = [
//     { label: 'Sitemap', url: '/sitemap' },
//     { label: 'Privacy Policy', url: '/privacy-policy' },
//     { label: 'Accessibility', url: '/accessibility' },
//     { label: 'Notice of Open Payment', url: '/open-payment' },
//   ];
//   currentYear = new Date().getFullYear();
// }

