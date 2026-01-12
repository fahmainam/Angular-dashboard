import { Component } from '@angular/core';
import { TabsComponent } from "../../../shared/components/dynamic-tabs/dynamic-tabs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabsComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
