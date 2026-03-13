import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
contactForm!: FormGroup;
email = 'bhaskarpaleti70366@gmail.com'
footerLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' }
];

socials = [
  { platform: 'GitHub', icon: 'GH', url: '...' },
  { platform: 'LinkedIn', icon: 'LI', url: '...' }
];
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Here you would typically call a service to send the email
      alert('Message sent successfully!');
      this.contactForm.reset();
    }
  }
}
