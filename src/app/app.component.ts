import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'car-service';
  showFooter:boolean = false;
  constructor(private router:Router){
    if(this.router.url.includes('home')||this.router.url.includes('contact-us')){
      this.showFooter = true;
    }
  }
  goToTop(){
    console.log('Heelo')
    $('html, body').animate({
      scrollTop: 0,
  },0);
  }
}
