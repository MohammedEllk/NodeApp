import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts : any;
  constructor(private Contactservice : ContactServiceService) { }

  ngOnInit(): void {
    this.retrieveContacts();
  }
  retrieveContacts(): void {
    this.Contactservice.getAll()
      .subscribe(
        data => {
          this.contacts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
