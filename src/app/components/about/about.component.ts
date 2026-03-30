import { Component } from '@angular/core';

interface Feature {
  title: string;
  desc: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  features: Feature[] = [
    {
      title: 'Frontend Architecture',
      desc: 'Building modular, reusable component libraries and optimising enterprise Angular applications for performance.',
      icon: '🚀'
    },
    {
      title: 'Reactive Programming',
      desc: 'Designing complex data flows with RxJS and NgRx — turning async complexity into clean, predictable state.',
      icon: '⚡'
    },
    {
      title: 'Clean Code Advocate',
      desc: 'Writing maintainable, well-tested TypeScript with a focus on readability, scalability, and long-term quality.',
      icon: '🧹'
    }
  ];
}