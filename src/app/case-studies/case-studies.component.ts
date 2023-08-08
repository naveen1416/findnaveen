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
      company:'Kea Castle Technologies Sdn Bhd',
      role:'Technical Lead',
      techStack:'Angular, Css3, Bootstrap and PHP',
      description:'Seeklocal is a local search engine to connect local vendors with the customers and generating the verified leads to the users. In this project we have use Angualar for front end development, API is developed in the PHP. For the mobile app development we are using Flutter.'
    },
    {
      projectName:'Neptune (eQRF)',
      company:'Pinnacle Consultancy sdn bhd',
      role:'Front End Developer',
      techStack:'Angular, Css3, Bootstrap and .NET MVC',
      description:'eQRF is stands for e - Quotation Request From, It is one of the module in the NEPTUNE project to digitize the current manual process. I was involved in Front End Development using Angular where the backend is .NET MVC'
    },
    {
      projectName:'Digital Condo',
      company:'Provalley Solutions',
      role:'UI Design Team Lead',
      techStack:'Angular, Css3, Bootstrap, .NET MVC and Jquery',
      description:'Digital Condo is a property management software, It consists of various modules like Bill payments, Complaints, Visitor Management, Renovation and Accounting, I was involved in UI Design & Development. Tech stack is .NET MVC with Angular, Jquery and SQL Server. '
    },
    {
      projectName:'REMS',
      company:'Provalley Solutions',
      role:'UI Design Team Lead',
      techStack:'React, Css3, Bootstrap, PHP(CI) and MySql',
      description:'REMS - Is Real Estate Marketing Software is a property listing and management software. It has features like appointment booking, property listing, agents listing and more. REMS is developed using PHP (Code Igniter), MySql for backend and REACT for Front end development, I was involved full UI Development. '
    },
    {
      projectName:'STOCKHAUS',
      company:'Feliz it solutions sdn bhd ',
      role:'HYBRID MOBILE APP DEVELOPER',
      techStack:'IONIC and AngularJS',
      description:'Stockhaus is stock trading app for Malaysia stock market, This app has features like Watch-list, Profile creation, Multilingual, Share Calculator, Stock Search, Currency Exchange rates and more. This app is developed in Ionic using third party API. '
    },
    {
      projectName:'VFLAG',
      company:'INFINIDEA sdn bhd',
      role:'Front End Developer',
      techStack:'React, Laravel and Mysql',
      description:'VFLAG is an IOT application for store management, it has different modules like user management, customer management, stock management etc..Tech stack used for for front end is REACT and Backend is Laravel and MySql'
    },
    {
      projectName:'EPVS',
      company:'Saffron info systems  sdn bhd',
      role:'UI Designer',
      techStack:'Code Igniter (PHP), MySql and Angular Js',
      description:'PVS is an electronic property valuation software for Malaysian property agencies to valuate the properties based on the old data given by the government. It is cloud based application with great features like verbals, cases and user role management and more.  Technologies used Code Igniter (PHP), MySql and Angular Js'
    },
   
   
  ]

}
