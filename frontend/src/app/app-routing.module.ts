import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { NewformcontactComponent } from './components/contact/newformcontact/newformcontact.component';

const routes: Routes = [
{ path: '', redirectTo: 'Contact', pathMatch: 'full' },
{ path: 'Contact', component: ContactComponent },
{ path : 'add',component: NewformcontactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
