import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  activeTab = '';

  private readonly router = inject(Router);

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activeTab = event.urlAfterRedirects;
      }
    });
  }

  isActive(tabRoute: string): boolean {
    return this.activeTab === tabRoute;
  }
}
