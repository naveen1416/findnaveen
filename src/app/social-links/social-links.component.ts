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
      "link":"https://www.linkedin.com/in/naveen-nandharam/",
      "iconClass":"lni-linkedin"
    },
    {
      "type":"Github",
      "link":"https://github.com/naveen1416",
      "iconClass":"lni-github"
    },
    {
      "type":"Instagram",
      "link":"https://www.instagram.com/naveen_nandharam/",
      "iconClass":"lni-instagram"
    },
    {
      "type":"WhatsApp",
      "link":"http://wa.me/447552202500",
      "iconClass":"lni-whatsapp"
    }
  ]

}
