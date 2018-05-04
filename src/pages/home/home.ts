import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: { title: string, subTitle: string, handler: any };

  constructor(
    public alertCtrl: AlertController
  ) {

    // for (let i = 0; i < 10 ; i++) {
    //   setTimeout(function() {console.log(i); }, 1000 * i);
    // }
    
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite',
      handler: (val)=>{
        console.log(val);
        
      }
      
    };
  }

  stpSelect(e) {
    console.log(e);
  }
  notificationSelect(e){
    console.log(e);
    
  }

  updateCucumber(){
    console.log(1);
    let alert = this.alertCtrl.create();
    alert.addInput({
      type: 'radio',
      label: 'Blue',
      value: 'blue',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'yello',
      value: 'yello',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'green',
      value: 'green',
      checked: false
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        
      }
    });
    alert.present();
    
  }

  //提交
  doMySubmit(ye){
    console.log(ye);
    console.log(this.os);
    
  }

  
}
