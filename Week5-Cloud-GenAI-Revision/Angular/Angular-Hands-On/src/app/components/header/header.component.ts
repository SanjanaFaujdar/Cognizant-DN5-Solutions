import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  portalName = 'Student Course Portal';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
