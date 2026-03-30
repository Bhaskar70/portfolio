import { Component } from '@angular/core';
import { SocialMediaLinks } from '../../../../public/contants';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly RESUME_PATH = '/PaletiBhaskaraRaoResume.pdf';
  SocialMediaLinks = SocialMediaLinks;

  downloadCV() {
    const link = document.createElement('a');
    link.href = this.RESUME_PATH;
    link.download = 'Bhaskara_Rao_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}