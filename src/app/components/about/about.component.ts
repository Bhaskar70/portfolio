import { Component, computed, signal } from '@angular/core';

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
private readonly careerStartDate = new Date('2022-06-01');
 
  readonly yearsOfExperience = computed(() => {
    const now = new Date();
    let years = now.getFullYear() - this.careerStartDate.getFullYear();
 
    const hasHadAnniversaryThisYear =
      now.getMonth() > this.careerStartDate.getMonth() ||
      (now.getMonth() === this.careerStartDate.getMonth() &&
        now.getDate() >= this.careerStartDate.getDate());
 
    if (!hasHadAnniversaryThisYear) {
      years--;
    }
 
    return years;
  });
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