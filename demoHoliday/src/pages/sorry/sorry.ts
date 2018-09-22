import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the SorryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sorry',
  templateUrl: 'sorry.html',
})
export class SorryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private videoPlayer: VideoPlayer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SorryPage');
  }

  dontClickMe() {
    this.videoPlayer.play('https://www.youtube.com/watch?v=NOX3QC0L9i8').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
