import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'tron-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private themeService: ThemeService) {}


  ngOnInit() {
    this.themeService.setTheme('honey'); // Set the desired theme name here
  }

  title = 'myapp';
}
