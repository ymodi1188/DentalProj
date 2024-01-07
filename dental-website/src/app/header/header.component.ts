import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  orthodontistInfo = 'PASADENA ORTHODONTIST';
  availabilityInfo = 'Available 24/7 (626) 603-8178';
  logoUrl = 'assets/logo.png'; // The path to your logo image
  navItems = [
    { label: 'Services', link: '/services' },
    { label: 'Smile Gallery', link: '/smile-gallery' },
    { label: 'Testimonials', link: '/testimonials' },
    { label: 'About Us', link: '/about-us' },
    { label: 'New Patients', link: '/new-patients' },
    { label: 'Contact', link: '/contact' },
    { label: 'Referral', link: '/referral' }
  ];
}
