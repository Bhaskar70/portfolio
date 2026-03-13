import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
features = [
    {
      title: 'Frontend Architecture',
      desc: 'Building modular, reusable components and optimizing enterprise Angular apps.',
      icon: '🚀'
    },
    {
      title: 'Technical Mentorship',
      desc: 'Training developers on modern web standards and clean coding practices.',
      icon: '👨‍🏫'
    }
  ];
}
