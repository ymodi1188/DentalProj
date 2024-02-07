import { Component, OnInit, HostListener} from '@angular/core';
interface Slide {
  title: string;
  description: string;
  backgroundColor: string;
}

interface SlideStyle {
  top: string;
}

@Component({
  selector: 'app-smile-gallery',
  templateUrl: './smile-gallery.component.html',
  styleUrls: ['./smile-gallery.component.css']
})
export class SmileGalleryComponent implements OnInit {
  colors: string[] = ['#fdc97c', '#e5d3d0', '#71b3d6']; // Example colors
  titles: string[] = ['Title 1', 'Title 2', 'Title 3']; // Example titles
  imageSources: string[] = ['/assets/flower-1.jpg', '/assets/flower-1.jpg', '/assets/flower-1.jpg']; // Example image sources
  Lslides !: NodeListOf<Element>;
  Rslides !: NodeListOf<Element>;
  slideHeight !: number ;
  index: number = 0;

  ngOnInit(): void {
    this.initSlider();
  }

  initSlider(): void {
    const wrapper = document.querySelector('.wrapper');
    if (wrapper) {
      this.slideHeight = wrapper.clientHeight;
      this.Lslides = document.querySelectorAll('.Lslide');
      this.Rslides = document.querySelectorAll('.Rslide');
  
      for (let i = 0; i < this.Lslides.length; i++) {
        this.Lslides[i].setAttribute('style', `background-color: ${this.colors[i]}; top: ${-this.slideHeight * i}px;`);
      }
  
      for (let i = 0; i < this.Rslides.length; i++) {
        this.Rslides[i].setAttribute('style', `top: ${this.slideHeight * i}px;`);
      }
    }
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.initSlider();
  }

  moveToTop(): void {
    this.index++;
    this.moveSlides(this.slideHeight);
    this.checkBounds();
  }

  moveToBottom(): void {
    this.index--;
    this.moveSlides(-this.slideHeight);
    this.checkBounds();
  }

  moveSlides(delta: number): void {
    for (let el = 0; el < this.Lslides.length; el++) {
      let styleL = this.Lslides[el].getAttribute('style');
      let styleR = this.Rslides[el].getAttribute('style');
  
      if (styleL && styleR) {
        let currentTopL = parseInt(styleL.split(';')[1].split(':')[1]);
        let currentTopR = parseInt(styleR.split(';')[1].split(':')[1]);
  
        this.Lslides[el].setAttribute('style', `background-color: ${this.colors[el]}; top: ${currentTopL + delta}px; transition: all 0.8s;`);
        this.Rslides[el].setAttribute('style', `top: ${currentTopR - delta}px; transition: all 0.8s;`);
      }
    }
  }
  

  checkBounds(): void {
    if (this.index > this.Lslides.length - 1) {
      this.index = 0;
      this.resetSlides();
    } else if (this.index < 0) {
      this.index = this.Rslides.length - 1;
      this.resetSlides();
    }
  }

  resetSlides(): void {
    for (let el = 0; el < this.Lslides.length; el++) {
      this.Lslides[el].setAttribute('style', `background-color: ${this.colors[el]}; top: ${-this.slideHeight * el}px;`);
      this.Rslides[el].setAttribute('style', `top: ${this.slideHeight * el}px;`);
    }
  }
  getTopPosition(index: number, isLeftSlide: boolean): string {
    // Example calculation - modify according to your requirements
    const position = index * 100; // Assuming each slide is 100px high, for example
    return isLeftSlide ? `${position}px` : `${-position}px`;
  }
 
  @HostListener('mousewheel', ['$event'])
  @HostListener('DOMMouseScroll', ['$event'])
  onMouseScroll(event: any): void {
    event.preventDefault();
    let delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));

    if (delta === 1) {
      this.moveToTop();
    } else if (delta === -1) {
      this.moveToBottom();
    }
  }
}
