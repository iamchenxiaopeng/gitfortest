import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SegmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segments',
  templateUrl: 'segments.html',
})
export class SegmentsPage {
  private pet: string = 'puppies';


  constructor(public alertCtrl: AlertController) {

  }
  showOptions(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'puppies',
      value: 'puppies',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'kittens',
      value: 'kittens',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'ducklings',
      value: 'ducklings',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.pet = data
        
      }
    });
    alert.present();
  }

  
}
