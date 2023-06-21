import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    // this.themeService.setTheme('dark'); // Set the desired theme name here
  }

  title = 'myapp';
}
