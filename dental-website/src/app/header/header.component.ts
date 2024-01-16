import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


 
  orthodontistInfo = 'MARKANDAY DENTAL DESIGN STUDIO';
  availabilityInfo = 'Available 24/7 (1054) 000000';
  logoUrl = '/assets/logo.png'; // The path to your logo image
  navItems = [
    {
      label: 'Services',
      dropdown: true,
      subItems: ['Orthodontics', 'Invisalign', 'TMJ Therapy', 'Children\'s Orthodontics', 'Tooth Whitening', 'Laser Treatment'],
      link: '/services'
    },
    {
      label: 'New Patients',
      dropdown: true,
      subItems: ['Your first visit', 'New Patient Form'],
      link: '/new-patients'
    },
    { label: 'Smile Gallery', dropdown: false, link: '/smile-gallery' },
    { label: 'Testimonials', dropdown: false, link: '/testimonials' },
    { label: 'Contact', dropdown: false, link: '/contact' },
    {
      label: 'About Us',
      dropdown: true,
      subItems: ['Dr. Markanday', 'Address on map', 'Blogs'],
      link: '/about-us'
    },
    // Adding more items without dropdowns

    // ... add other items as needed ...
  ];
  // Object to track which dropdowns are open
  dropdownOpen: { [key: string]: boolean } = {};
  navActive = false;

  toggleNav(): void {
    this.navActive = !this.navActive;
  }

  toggleDropdown(itemLabel: string, isOpen: boolean): void {
    this.dropdownOpen[itemLabel] = isOpen;
  }

  closeDropdowns(): void {
    Object.keys(this.dropdownOpen).forEach(key => {
      this.dropdownOpen[key] = false;
    });
  }
}
