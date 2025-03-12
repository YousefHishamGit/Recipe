import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./components/sideBar/side-bar/side-bar.component";
import { NavBarComponent } from "./components/navBar/nav-bar/nav-bar.component";
import { CardComponent } from "./components/card/card/card.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent, NavBarComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe';
}
