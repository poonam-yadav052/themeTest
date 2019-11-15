import { Component } from '@angular/core';
import { ThemeSwitcherService } from '../theme-switcher.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public themeSwitcher: ThemeSwitcherService) {}
  changeTheme(name) {
    this.themeSwitcher.setTheme(name);
  }
}
