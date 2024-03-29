import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SmileGalleryComponent } from './smile-gallery/smile-gallery.component';
import { FloatingButtonComponent } from './floating-button/floating-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    SmileGalleryComponent,
    FloatingButtonComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule // Add routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
