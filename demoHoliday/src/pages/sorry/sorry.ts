import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sorry',
  templateUrl: 'sorry.html',
})
export class SorryPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private videoPlayer: VideoPlayer,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SorryPage');
  }

  dontClickMe() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }

  vdo(){
    this.videoPlayer.play('https://www.youtube.com/watch?v=NOX3QC0L9i8').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
}
