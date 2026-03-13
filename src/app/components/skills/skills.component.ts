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
      icon: 'code', // You can use Lucide-angular or FontAwesome icons
      skills: ['Angular 17/18', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'SCSS']
    },
    {
      category: 'Leadership & Tools',
      icon: 'users',
      skills: ['Technical Training', 'Mentorship', 'Git / GitHub', 'CI/CD Pipelines', 'Agile/Scrum']
    },
    {
      category: 'Testing & Core',
      icon: 'terminal',
      skills: ['Jasmine / Karma', 'Unit Testing', 'REST APIs', 'Web Performance', 'Clean Architecture']
    }
  ];
}
