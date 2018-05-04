import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private qiezi:string;
  private bocai: string;

  cucumber: boolean;

  updateCucumber() {
    console.log('Cucumbers new state:' + this.cucumber);
  }

  getFruit(val){
    console.log(val);
    
  }
}
