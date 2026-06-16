import { Component } from '@angular/core';

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
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'PS Green Energy Portal',
      description: 'A professional web application built for a green energy enterprise to promote and streamline sustainable solar panel installations and eco-friendly energy management solutions.',
      image: 'project1.png', // Update with your actual image path or logo asset
      tags: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design'],
      githubUrl: '#', // Add your repository link here if applicable
      liveUrl: 'https://ps-green-energy.netlify.app/',
      date: 'May 2026'
    },
    {
      title: 'Angular Mentorship Platform',
      description: 'A custom learning management system built to track mentee progress, featuring modular architecture and lazy loading.',
      image: 'assets/project2.png',
      tags: ['Angular', 'Firebase', 'SCSS'],
      githubUrl: '#',
      liveUrl: '#',
      date: 'Aug 2024'
    }
  ];
}