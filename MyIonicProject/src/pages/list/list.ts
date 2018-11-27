import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public tap: number = 0;
 
  constructor(public navCtrl: NavController) { }

  doGoFB()
  {
    this.navCtrl.push(HelloIonicPage);
  }

  tapEvent(e) {

    this.tap++

  }
}
