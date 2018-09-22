import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OhPage } from './oh';

@NgModule({
  declarations: [
    OhPage,
  ],
  imports: [
    IonicPageModule.forChild(OhPage),
  ],
})
export class OhPageModule {}
