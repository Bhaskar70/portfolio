import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavBarComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent, HomeComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // app.component.ts
@HostListener('document:visibilitychange', [])
onVisibilityChange() {
  const bg = document.querySelector('.fixed-background');
  if (document.hidden) {
    bg?.classList.add('paused');
  } else {
    bg?.classList.remove('paused');
  }
}
  title = 'portfolio';
}
