import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { SmileGalleryComponent } from './smile-gallery/smile-gallery.component';
const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'smile-gallery', component: SmileGalleryComponent},
  // Redirect empty path to '/contact' or another default path
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
