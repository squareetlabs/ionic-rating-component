var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicRatingComponent } from './components/ionic-rating-component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonicRatingSubscriptionService } from './services/ionic-rating-subscription.service';
var IonicRatingModule = /** @class */ (function () {
    function IonicRatingModule() {
    }
    IonicRatingModule_1 = IonicRatingModule;
    IonicRatingModule.forRoot = function () {
        return {
            ngModule: IonicRatingModule_1,
        };
    };
    var IonicRatingModule_1;
    IonicRatingModule = IonicRatingModule_1 = __decorate([
        NgModule({
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
    ], IonicRatingModule);
    return IonicRatingModule;
}());
export { IonicRatingModule };
//# sourceMappingURL=ionic-rating-component.module.js.map