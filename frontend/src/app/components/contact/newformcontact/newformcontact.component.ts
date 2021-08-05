import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import {contact} from '../../../models/contact';

@Component({
  selector: 'app-newformcontact',
  templateUrl: './newformcontact.component.html',
  styleUrls: ['./newformcontact.component.css']
})
export class NewformcontactComponent implements OnInit {
   
  contact : contact;
  constructor(ContactService : ContactServiceService) {

    this.contact = {
      id : -1,
      nom : '',
      prenom : '',
      pays : '',

    }
   }

  ngOnInit(): void {
  }

}
