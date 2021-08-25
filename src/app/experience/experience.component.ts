import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Feel Happy Working With me..!';

  experienceData = [
    {
      company:'Pinnacle Consultancy sdn bhd',
      country:'Kuala Lumpur, Malaysia',
      role:'Front End Developer',
      duration:'July 2019 - present',
      description:'At Accion Working as Front end developer for one of the top client In Malaysia in Telecom domain. Involved in various projects to transform the requirements into the well working solutions. '
    },
    {
      company:'Provalley solution sdn bhd / llp',
      country:'Hyderabad, India',
      role:'UI Design & Development | Digital Marketing Team Lead ',
      duration:'April 2018 - June 2019',
      description:'In Provalley worked as UI Design team lead, Provalley is a product based startup company, I was involved in Digital Marketing  as well'
    },
    {
      company:'Feliz it solutions sdn bhd',
      country:'Kuala Lumpur, Malaysia',
      role:'HYBRID MOBILE APP DEVELOPER',
      duration:'January 2017 - May 2018',
      description:'I worked for Feliz client Ozura First Logix as Hybrid Mobile App Developer using Ionic platform (Angular JS). Involved full development life cycle. '
    },
    {
      company:'INFINIDEA sdn bhd',
      country:'Kuala Lumpur, Malaysia',
      role:'Front End Developer',
      duration:'October 2016 - May 2017',
      description:'At Infinidea Working as Front end developer, Involved in developing websites from scratch using PSD and UX Design. UI Enhancements to existing applications.'
    },
    {
      company:'Saffron info systems  sdn bhd',
      country:'Kuala Lumpur, Malaysia',
      role:'UI Designer',
      duration:'October 2015 - September 2016',
      description:'Worked as Junior UI Designer, involved in rapid mockup creation using pencil and adobe Photoshop. Designing clickable html templates using bootstrap.'
    },
    {
      company:'Freelance',
      country:'Global',
      role:'UI Designer',
      duration:'July 2014 - September 2015 August',
      description:'Worked as Freelance Web Designer, involved in website designing and graphic designing. Designing clickable html templates using bootstrap.'
    },
  ]
}
