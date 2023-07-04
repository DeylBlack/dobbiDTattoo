import {Component, OnInit} from '@angular/core';
// @ts-ignore
import AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dobbid-tattoo';

  public ngOnInit(): void {
    AOS.init();
  }
}
