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
      title: 'Enterprise E-Commerce Dashboard',
      description: 'A high-performance Angular dashboard featuring real-time data visualization with RxJS and NgRx state management.',
      image: 'assets/project1.png',
      tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
      githubUrl: '#',
      liveUrl: '#',
      date: 'Jan 2025 - Present'
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
