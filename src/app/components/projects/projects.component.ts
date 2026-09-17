import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  date: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PS Green Energy Portal',
      description: 'A professional web application built for a green energy enterprise to promote and streamline sustainable solar panel installations, featuring services and quote calculation layouts.',
      image: 'project1.png', 
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      githubUrl: 'https://github.com/Bhaskar70/ps-green-energy', 
      liveUrl: 'https://ps-green-energy.netlify.app/',
      date: 'May 2026'
    },
    {
      title: 'Modern E-Commerce Store',
      description: 'An interactive online store layout built with product showcases, a clean navigation header, live cart count indicators, and dynamic banner carousel elements.',
      image: 'project2.png',
      tags: ['Angular', 'Node JS', 'E-Commerce', 'SCSS', 'UI/UX'],
      githubUrl: 'https://github.com/Bhaskar70/e-commerce',
      liveUrl: 'https://dummy-store-app.netlify.app/',
      date: 'Apr 2026'
    }
  ];
}