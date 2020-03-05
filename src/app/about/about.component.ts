import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Who am I ?';
  name = 'Naveen Nandharam';
  role = 'Front End Developer';
  image = 'assets/images/work.png';
  description = 'Mission-driven front end developer with almost 5 years of impeccable experience in full web development life cycle including front end and back end development. \n As a UI developer I enjoy creating new user interfaces rapidly. ';
  hobbies = 'Coming to my hobbies I love Cooking, Web Surfing, Template Designing, Travelling and Music';
  personalLife = 'I am quite proud to say, I am not your stereotypical web developer who sits in a dark room all day and night. I do spend my free time with family and my kid :-)';
  
  
}
