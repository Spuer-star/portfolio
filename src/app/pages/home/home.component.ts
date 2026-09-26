import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { AboutComponent } from '../../sections/about/about.component';
import { ContactComponent } from '../../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-projects />
    <app-experience />
    <app-skills />
    <app-about />
    <app-contact />
  `,
})
export class HomeComponent {}
