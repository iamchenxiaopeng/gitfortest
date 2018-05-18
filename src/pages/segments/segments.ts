import { Component, Directive, HostBinding, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';

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
@Directive({
  selector: '[hostBinding]',
})
export class SegmentsPage {
  private pet: string = 'puppies';

  @HostBinding('style.color') color: string;
  // @HostBinding('style') style: any;
  @HostBinding('style.width') width;
  @HostListener('click',['$event.target']) onClick(btn: HTMLElement){
    console.log('hostListener事件已经启动，hostBinding属性已经生效',btn)
    console.log(this)
    btn.style.color = 'red';
    this.width = 200 + 'px';
  }
  @HostListener('keyup') onKeyup(){
    console.log('hostListener事件2已经启动，hostBinding属性已经生效')
    // this.color = 'red !important';
    this.width = 300 + 'px';
  }

  constructor(public alertCtrl: AlertController,
  ) {

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
