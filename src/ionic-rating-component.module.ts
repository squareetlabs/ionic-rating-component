import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicRatingComponent } from './components/ionic-rating-component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicRatingSubscriptionService } from './services/ionic-rating-subscription.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
  ],
  declarations: [
    IonicRatingComponent,
  ],
  exports: [
    IonicRatingComponent,
  ], providers: [
    IonicRatingSubscriptionService,
  ],
})
export class IonicRatingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicRatingModule,
    };
  }
}
