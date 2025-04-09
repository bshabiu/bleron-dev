import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 700,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    offset: 120
  });
});

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
