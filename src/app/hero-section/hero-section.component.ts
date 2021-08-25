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
  role = 'UI Lead Developer';
  image = 'assets/images/naveen_image.jpg';
  description = 'Mission-driven Ui Web Developer with almost 7 years of impeccable experience in full web development life cycle including front end and back end development and project management. \n As a UI developer I enjoy creating new user interfaces rapidly. ';
}
