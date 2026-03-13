import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { NavList } from '../../../../public/contants';
import { MatExpansionModule } from "@angular/material/expansion";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule, MatExpansionModule],
  standalone:true
})
export class NavBarComponent implements OnInit {
  navList = NavList
  isScrolled = false;
  showMenu = false;

constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.initTheme(); // Ensure theme loads on startup
  }

  get isDark() {
    return this.themeService.isDark;
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }

toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  handleDownload() {
    const link = document.createElement('a');
    link.href = '/PaletiBhaskaraRaoResume.pdf';
    link.download = 'Paleti_Bhaskara_Rao_Resume.pdf';
    link.click();
  }
}