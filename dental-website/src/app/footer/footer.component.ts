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
  address = '2035 Lake Ave, Altadena CA 91001';
  phone = '(626) 603-8164';
  rating = '5.0';
  reviewCount = 200;
  currentYear = new Date().getFullYear();
  socialLinks = [
    { iconClass: 'fab fa-facebook-f', url: 'https://facebook.com' },
    { iconClass: 'fab fa-twitter', url: 'https://twitter.com' },
    { iconClass: 'fab fa-instagram', url: 'https://instagram.com' },
    { iconClass: 'fab fa-linkedin-in', url: 'https://linkedin.com' },
    { iconClass: 'fab fa-youtube', url: 'https://youtube.com' },
  ];
  bottomLinks = [
    { label: 'Sitemap', url: '/sitemap' },
    { label: 'Privacy Policy', url: '/privacy-policy' },
    // ...other links
  ];
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

