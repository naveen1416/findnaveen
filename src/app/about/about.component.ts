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
  role = 'Full-Stack Javascript Developer';
  image = 'assets/images/work.png';
  description = 'Mission-driven Javascript Developer with almost 8 years of impeccable experience in developing front end code from scratch. I enjoy creating websites and apps from scratch. ';
  hobbies = 'Coming to my hobbies, I love cooking Indian Cuisine, Web Surfing, Template Designing, Travelling and Music.';
  personalLife = 'I am quite proud to say, I am not your stereotypical web developer who sits in a dark room all day and night. I do spend my free time with family and my kids :-)';
  
  
}
