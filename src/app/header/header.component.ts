import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuItems = [
    {
      "menuLabel":"Home",
      "routerLink":""
    },
    {
      "menuLabel":"About",
      "routerLink":"about"
    },
    {
      "menuLabel":"Experience",
      "routerLink":"experience"
    },
    {
      "menuLabel":"Skills",
      "routerLink":"skills"
    },
    {
      "menuLabel":"Case Studies",
      "routerLink":"case-studies"
    },
    {
      "menuLabel":"Reach Me",
      "routerLink":"reach-me"
    },

  ]
closeToggle(){
    const appMobileMenu = document.getElementsByClassName("navbar-collapse")[0];
    console.log(appMobileMenu);
    appMobileMenu.classList.remove('show');
}


}
