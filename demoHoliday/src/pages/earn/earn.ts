import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-earn',
  templateUrl: 'earn.html',
})
export class EarnPage {

  model: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EarnPage');
  }

  submit() {
    let alert = this.alertCtrl.create({
      title: 'Did you say this?',
      message: this.model.word,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yesss',
          handler: () => {
            let alert = this.alertCtrl.create({
              title: "Do not lie to me",
              buttons: ["Okayy..."]
            });
            alert.present();
          }
        }
      ]
    });
    alert.present();
  }

  home(){
    this.navCtrl.popToRoot();
  }

}
