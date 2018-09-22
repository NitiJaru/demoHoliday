import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EarnPage } from '../earn/earn';
import { SorryPage } from '../sorry/sorry';
import { OhPage } from '../oh/oh';
import { MenPage } from '../men/men';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigate2Earn() { this.navCtrl.push(EarnPage) }
  navigate2Sorry() { this.navCtrl.push(SorryPage) }
  navigate2Oh() { this.navCtrl.push(OhPage) }
  navigate2Men() { this.navCtrl.push(MenPage) }
}
