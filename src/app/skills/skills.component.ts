import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

ngOnInit() {
}
 title = 'What do I do ?';

 skillsData = [
   {
    skillTitle: 'Front End', 
     stack:[
              {subtitle:'HTML5', img:'assets/images/html5.png'},
              {subtitle:'CSS3', img:'assets/images/css3.png'},
              {subtitle:'SAAS', img:'assets/images/sass.png'},
              {subtitle:'Bootstrap', img:'assets/images/bootstrap.png'},
              {subtitle:'Materialize', img:'assets/images/materialize.png'},
              {subtitle:'Foundation', img:'assets/images/foundation.png'},
              {subtitle:'Jvascript', img:'assets/images/javascript.png'},
              {subtitle:'JQuery', img:'assets/images/jquery.png'},
              {subtitle:'React', img:'assets/images/react.png'},
              {subtitle:'Angular', img:'assets/images/angular.png'}
           ]
   },
   {
    skillTitle: 'Backend', 
   
    stack:[
             {subtitle:'Node Js', img:'assets/images/nodejs.png'},
             {subtitle:'PHP', img:'assets/images/php.png'},
             {subtitle:'Code Igniter', img:'assets/images/ci.png'},
             {subtitle:'MySql', img:'assets/images/mysql.png'}
          ]
  },
   {
    skillTitle: 'CMS', 
   
    stack:[
             {subtitle:'Wordpress', img:'assets/images/wordpress.png'},
             {subtitle:'Magento', img:'assets/images/magento.png'}
          ]
  },
  {
    skillTitle: 'Tools & Others', 
   
    stack:[
             {subtitle:'Adobe Photoshop', img:'assets/images/photoshop.png'},
             {subtitle:'Github', img:'assets/images/github.png'},
             {subtitle:'SEO', img:'assets/images/seo.png'}
          ]
  },
 ]
}
