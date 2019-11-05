import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  constructor() {}

  ngOnInit() {
    let audio = new Audio('./vendor/smb_powerup.wav');
    audio.play();
  }
}
