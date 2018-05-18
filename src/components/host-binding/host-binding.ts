import { Component } from '@angular/core';

/**
 * Generated class for the HostBindingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'host-binding',
  templateUrl: 'host-binding.html'
})
export class HostBindingComponent {

  text: string;

  constructor() {
    console.log('Hello HostBindingComponent Component');
    this.text = 'Hello World';
  }

}
