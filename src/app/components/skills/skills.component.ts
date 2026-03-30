import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    {
      category: 'Frontend Development',
      icon: 'code',
      skills: ['Angular 17/18', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'SCSS']
    },
    {
      category: 'Architecture & Patterns',
      icon: 'account_tree',
      skills: ['Component Design', 'Lazy Loading', 'Micro-Frontends', 'Design Patterns', 'Clean Architecture']
    },
    {
      category: 'Testing & Quality',
      icon: 'terminal',
      skills: ['Jasmine / Karma', 'Unit Testing', 'REST APIs', 'Web Performance', 'Code Reviews']
    },
    {
      category: 'Dev Tools & Workflow',
      icon: 'build',
      skills: ['Git / GitHub', 'CI/CD Pipelines', 'Agile / Scrum', 'VS Code', 'Chrome DevTools']
    }
  ];
}