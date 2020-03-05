import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.css']
})
export class SocialLinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  socialMedia = [
    {
      "type":"LinkedIn",
      "link":"https://www.linkedin.com/in/naveen-n-423917112/",
      "iconClass":"lni-linkedin"
    },
    {
      "type":"Github",
      "link":"https://github.com/naveen1416",
      "iconClass":"lni-github"
    },
    {
      "type":"Instagram",
      "link":"https://www.instagram.com/_naveenn_/",
      "iconClass":"lni-instagram"
    },
    {
      "type":"WhatsApp",
      "link":"http://wa.me/919701081702",
      "iconClass":"lni-whatsapp"
    }
  ]

}
