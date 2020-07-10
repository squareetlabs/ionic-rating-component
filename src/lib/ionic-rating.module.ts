import { NgModule } from '@angular/core';
import { IonicRatingComponent } from './ionic-rating.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [IonicRatingComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [IonicRatingComponent]
})
export class IonicRatingComponentModule { }
