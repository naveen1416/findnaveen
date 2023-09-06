import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  name = 'Naveen Nandharam';
  role = 'Full-Stack Developer';
  image = 'assets/images/naveen_image.jpg';
  description = 'Mission-driven Javascript Developer with almost 8 years of impeccable experience in full web development life cycle including front end and back end development and project management. \n I enjoy creating websites and apps from scratch. ';
}
