import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

interface ArticleTag {
  label: string;
  color: string;
}

interface Article {
  title: string;
  description: string;
  tags: ArticleTag[];
  readTime: string;
  url: string;
}

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  articles: Article[] = [
    {
      title: 'Understanding Angular Change Detection: How Zone.js and NgZone Really Work',
      description:
        'A deep dive into how Angular knows when to update the UI — covering Zone.js internals, OnPush strategy, runOutsideAngular, and the gold standard of OnPush + async pipe.',
      tags: [
        { label: 'Angular', color: 'tag-angular' },
        { label: 'Performance', color: 'tag-perf' },
      ],
      readTime: '7 min read',
      url: 'https://medium.com/@bhaskarpaleti70366/understanding-angular-change-detection-how-zone-js-and-ngzone-really-work-70625b10f1ea',
    },
    {
      title: 'Stop Using any: Master TypeScript Generics for Safer, Smarter Code',
      description:
        'Why reaching for any kills your type safety — and how Generics give you full flexibility without losing type information. Covers real-world API response patterns.',
      tags: [
        { label: 'TypeScript', color: 'tag-ts' },
        { label: 'Angular', color: 'tag-angular' },
      ],
      readTime: '4 min read',
      url: 'https://medium.com/@bhaskarpaleti70366/stop-using-any-master-typescript-generics-for-safer-smarter-code-6053a7ada0e8',
    },
    {
      title: 'Designing REST APIs That Your Frontend Can Actually Trust',
      description:
        'A full-stack guide to production-ready Node.js APIs — from resource-based routing and proper status codes to structured error handling, versioning, and pagination.',
      tags: [
        { label: 'Node.js', color: 'tag-node' },
        { label: 'REST API', color: 'tag-api' },
      ],
      readTime: '11 min read',
      url: 'https://medium.com/@bhaskarpaleti70366/designing-rest-apis-that-your-frontend-can-actually-trust-b0dd4306300c',
    },
    {
      title: 'How I Integrated a JavaScript Library into My Angular App (and Handled JS Callbacks)',
      description:
        'A practical walkthrough of bridging plain JS libraries with Angular using the Window interface — plus two real bugs that silently broke the dev environment.',
      tags: [
        { label: 'Angular', color: 'tag-angular' },
        { label: 'JavaScript', color: 'tag-js' },
      ],
      readTime: '4 min read',
      url: 'https://medium.com/@bhaskarpaleti70366/how-i-integrated-a-javascript-library-into-my-angular-app-and-handled-js-callbacks-35a9f2dd32b9',
    },
  ];
}