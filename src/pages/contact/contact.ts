import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  private qiezi:string;
  private bocai: string;
  private langs;
  private langForm;
  private radioGroupData;//radio-group的值

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }
  cucumber: boolean;

  doSubmit(e) {
    console.log('doSubmit',this.langForm,this.radioGroupData);
  }
  ionC(e) {
    console.log('ionC',e,this.radioGroupData);
  }
  updateCucumber(e){
    console.log(e);
  }
  getFruit(val){
    console.log(val);
    
  }
}
