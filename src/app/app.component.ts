import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FluxoComponent} from "./fluxo-component/fluxo-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FluxoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
