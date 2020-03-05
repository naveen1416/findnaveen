import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { SocialLinksComponent } from './social-links/social-links.component';


const appRoutes: Routes = [
{ path: 'about', component: AboutComponent },
{ path: 'skills', component: SkillsComponent },
{ path: 'home', component: HeroSectionComponent},
{ path: 'experience', component: ExperienceComponent},
{ path: 'case-studies', component: CaseStudiesComponent},
{ path: 'reach-me', component: ContactMeComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full'},
//{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    CaseStudiesComponent,
    ContactMeComponent,
    SocialLinksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
