var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var IonicRatingSubscriptionService = /** @class */ (function () {
    function IonicRatingSubscriptionService() {
        this.starRatingSubject = new Subject();
        this.topicSubject = new Subject();
    }
    IonicRatingSubscriptionService.prototype.publishStartRatingChanged = function (value) {
        this.starRatingSubject.next(value);
    };
    IonicRatingSubscriptionService.prototype.getStartRatingChangedObservable = function () {
        return this.starRatingSubject;
    };
    IonicRatingSubscriptionService.prototype.publishTopic = function (topic, value) {
        this.topicSubject.next({ topic: topic, value: value });
    };
    IonicRatingSubscriptionService.prototype.getTopicObservable = function (key) {
        return this.topicSubject[key];
    };
    IonicRatingSubscriptionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], IonicRatingSubscriptionService);
    return IonicRatingSubscriptionService;
}());
export { IonicRatingSubscriptionService };
//# sourceMappingURL=ionic-rating-subscription.service.js.map