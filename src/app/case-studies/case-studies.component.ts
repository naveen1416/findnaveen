import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'What I have done :-)';
  projectsData = [
    {
      projectName:'SeekLocal',
      company:'Kea Castle Technologies',
      role:'Technical Lead',
      techStack:'React, Parcel, React Hooks, Material UI, Node, REST API, JSON, PHP,MySQL, JIRA & Teams',
      description:'Seeklocal is a local search engine to connect local vendors with the customers and generating the verified leads to the users. It solves small enterprises lead generation problem and it is cost effective solution.'
    },
    {
      projectName:'Neptune (eQRF)',
      company:'Pinnacle Consultancy sdn bhd',
      role:'Front End Developer',
      techStack:'Angular, CSS, Typescript, JSON, SSRS Reports & POWER BI',
      description:'eQRF is stands for e - Quotation Request From, It is one of the module in the NEPTUNE project to digitize the current manual process. I was involved in Front End Development using Angular where the backend is .NET MVC'
    },
    {
      projectName:'Digital Condo',
      company:'Provalley Solutions',
      role:'UI Design & Development | Digital Marketing Team Lead',
      techStack:'UX Design Process, Email Template Designing, Application Front End End Development, HTML, Bootstrap, Javascript, SEO, SMO & Email Marketing.',
      description:'Digital Condo is a property management software, It consists of various modules like Bill payments, Complaints, Visitor Management, Renovation and Accounting, I was involved in UI Design & Development.'
    },
    {
      projectName:'REMS',
      company:'Provalley Solutions',
      role:'UI Design & Development | Digital Marketing Team Lead',
      techStack:'UX Designing, Email Template Designing, React, Javascript, PHP(CodeIgniter), MySQL, SEO, SMO & Email Marketing.',
      description:'REMS - (Real Estate Management System) is a property listing and management software. It has features like appointment booking, property listing, agents listing and more'
    },
    {
      projectName:'STOCKHAUS',
      company:'Feliz it solutions sdn bhd ',
      role:'HYBRID MOBILE APP DEVELOPER',
      techStack:'IONIC 1 (Angular JS), Javascript, JSON, UI Development & CSS.',
      description:'Stockhaus is a trading app for Malaysian stock market, This app has features like Watchlist, Profile creation, Multilingual, Shares Calculator, Stock Search, Currency Exchange rates and more.'
    },
    {
      projectName:'VFLAG',
      company:'INFINIDEA sdn bhd',
      role:'Full Stack Developer',
      techStack:'Vue, Javascript, PHP (Laravel), MySQL & Linux Server.',
      description:'VFLAG is an IOT application for store management, it has different modules like user management, customer management, stock management etc.'
    },
    {
      projectName:'EPVS',
      company:'Saffron info systems  sdn bhd',
      role:'UI Designer',
      techStack:'HTML, CSS, Jquery, Bootstrap, PHP (Code Igniter) & MySQL',
      description:'EPVS is an electronic property valuation software for Malaysian propertyagencies to valuate the properties based on the old data given by the government. It is cloud based application with great features like verbals,cases and user role management and more.'
    },
   
   
  ]


  otherProjects = [
    {
      projectUrl:'https://www.meteoriqs.com/',
      projectImgSrc:'../../assets/projects/1.jpg'
    },
    {
      projectUrl:'http://keacastle.com/',
      projectImgSrc:'../../assets/projects/2.png'
    },
    {
      projectUrl:'http://keacastle.com/',
      projectImgSrc:'../../assets/projects/3.jpg'
    },
    {
      projectUrl:'https://keacastle.xyz/demo/zee5/',
      projectImgSrc:'../../assets/projects/4.png'
    },
    {
      projectUrl:'http://ssrmaxillofacial.com/',
      projectImgSrc:'../../assets/projects/5.png'
    },
    {
      projectUrl:'http://ananthakshya.com/',
      projectImgSrc:'../../assets/projects/6.png'
    },
    {
      projectUrl:'http://iihcm.com/',
      projectImgSrc:'../../assets/projects/7.png'
    }, 
    {
      projectUrl:'https://accountingforsure.com/',
      projectImgSrc:'../../assets/projects/8.png'
    },
    {
      projectUrl:'https://keacastle.xyz/demo/rituals/',
      projectImgSrc:'../../assets/projects/9.png'
    }
  ]

}
