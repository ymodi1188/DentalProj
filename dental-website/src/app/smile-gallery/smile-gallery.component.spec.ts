import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmileGalleryComponent } from './smile-gallery.component';

describe('SmileGalleryComponent', () => {
  let component: SmileGalleryComponent;
  let fixture: ComponentFixture<SmileGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmileGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmileGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
