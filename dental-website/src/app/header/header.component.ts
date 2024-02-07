import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuVisible = false;

  menuItems = [
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
      link: '/assets/patient-form.pdf'
    },
    { label: 'Smile Gallery', dropdown: false, link: '/smile-gallery' },
    { label: 'Testimonials', dropdown: false, link: '/testimonials' },
    { label: 'Contact', dropdown: false, link: '/contact' },
    {
      label: 'About Us',
      dropdown: true,
      subItems: ['Dr. Markanday', 'Address on map', 'Blogs'],
      link: '/about-us'
    }
  ];
  dropdownOpen: { [key: string]: boolean } = {};
  toggleMobileMenu() {
    this.isMobileMenuVisible = !this.isMobileMenuVisible;
  }
  toggleDropdown(itemLabel: string, isOpen: boolean): void {
    this.dropdownOpen[itemLabel] = isOpen;
  }

  closeDropdowns(): void {
    Object.keys(this.dropdownOpen).forEach(key => {
      this.dropdownOpen[key] = false;
    });
  
}
closeMobileMenu() {
  if (this.isMobileMenuVisible) {
    this.isMobileMenuVisible = false;
  }
}
}
