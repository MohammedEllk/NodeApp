import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import {contact} from '../../../models/contact';

@Component({
  selector: 'app-newformcontact',
  templateUrl: './newformcontact.component.html',
  styleUrls: ['./newformcontact.component.css']
})
export class NewformcontactComponent implements OnInit {
   
  contact : contact;
  ContactForm : FormGroup;
  
  constructor(private ContactService : ContactServiceService,private fb : FormBuilder,private Router: Router) {
    this.ContactForm  = this.fb.group({
      id: ['',Validators.required],
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
      pays: ['',Validators.required],
      
    });
    this.contact = {
      id : -1,
      nom : '',
      prenom : '',
      pays : '',

    }
   }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.ContactForm  = this.fb.group({
      id: ['',Validators.required],
      nom: ['',Validators.required],
      prenom: ['',Validators.required],
      pays: ['',Validators.required],
      
    });
  }
  onSubmitForm(){
    const formData:any = new FormData();
    formData.append('id', this.ContactForm?.get('id')?.value);
    formData.append('nom', this.ContactForm?.get('nom')?.value);
    formData.append('prenom', this.ContactForm?.get('prenom')?.value);
    formData.append('pays', this.ContactForm?.get('pays')?.value);
    
    /**for (var value of formData.values()) {
      console.log(value);
   }**/
    var values = {
      id : this.ContactForm?.get('id')?.value,
      nom :  this.ContactForm?.get('nom')?.value,
      prenom : this.ContactForm?.get('prenom')?.value,
      pays : this.ContactForm?.get('pays')?.value,
    }
    this.ContactService.create(values)
    .subscribe(
      data=>{
        alert('success!');
      }
    );
    this.Router.navigate(['/Contact']);
}


}
