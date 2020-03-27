var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var IonicRatingComponent = /** @class */ (function () {
    function IonicRatingComponent(ionic5StartRatingSubscriptionService) {
        this.ionic5StartRatingSubscriptionService = ionic5StartRatingSubscriptionService;
        this.eventInfo = (function () {
            var id = new Date().getTime();
            var topic = "star-rating:" + id + ":changed";
            return {
                topic: topic,
            };
        })();
        this.ratingChanged = new EventEmitter();
        this.readonly = "false";
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'ios-star';
        this.defaultIcon = 'ios-star-outline';
        this.halfIcon = 'ios-star-half';
        this.halfStar = "false";
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
        this.Math = Math;
        this.parseFloat = parseFloat;
    }
    IonicRatingComponent_1 = IonicRatingComponent;
    IonicRatingComponent.prototype.ngOnInit = function () {
        this.rating = this.rating || 3; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    };
    IonicRatingComponent.prototype.writeValue = function (obj) {
        this.rating = obj;
    };
    IonicRatingComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    IonicRatingComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    IonicRatingComponent.prototype.setDisabledState = function (isDisabled) {
        this.readonly = isDisabled ? "true" : "false";
    };
    Object.defineProperty(IonicRatingComponent.prototype, "rating", {
        get: function () {
            return this._rating;
        },
        set: function (val) {
            this._rating = val;
            if (this.onChange) {
                this.onChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    IonicRatingComponent.prototype.changeRating = function (event) {
        if (this.readonly && this.readonly === "true")
            return;
        // event is different for firefox and chrome
        var id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar === "true") {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + .5;
        }
        else {
            this.rating = id + 1;
        }
        // subscribe this event to get the changed value in your parent compoanent 
        this.ionic5StartRatingSubscriptionService.publishStartRatingChanged(this.rating);
        this.ionic5StartRatingSubscriptionService.publishTopic(this.eventInfo.topic, this.rating);
        // unique event
        this.ratingChanged.emit(this.rating);
    };
    var IonicRatingComponent_1;
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "rating", null);
    __decorate([
        Output()
    ], IonicRatingComponent.prototype, "ratingChanged", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "activeColor", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "defaultColor", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "activeIcon", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "defaultIcon", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "halfIcon", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "halfStar", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "maxRating", void 0);
    __decorate([
        Input()
    ], IonicRatingComponent.prototype, "fontSize", void 0);
    IonicRatingComponent = IonicRatingComponent_1 = __decorate([
        Component({
            selector: 'ionic-rating-component',
            template: "\n<div class=\"ionic5-star-rating\">\n  <button [ngStyle]=\"{'width' : fontSize, 'height' : fontSize}\" *ngFor=\"let index of iconsArray\" id=\"{{index}}\" type=\"button\" ion-button icon-only (click)=\"changeRating($event)\">\n    <ion-icon [ngStyle]=\"{'color':index < this.Math.round(this.parseFloat(rating)) ? activeColor : defaultColor, 'font-size' : fontSize }\" name=\"{{(halfStar ==='true' && (rating - index > 0) && (rating - index <= 0.5)) ? halfIcon : (index < this.Math.round(this.parseFloat(rating))) ? activeIcon : defaultIcon}}\"></ion-icon>\n  </button>\n</div>\n",
            styles: ["\n    .ionic-rating-component button {\n        background: none;\n        box-shadow: none;\n        -webkit-box-shadow: none;\n        padding : 0px;\n    }\n"],
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: IonicRatingComponent_1,
                    multi: true,
                },
            ],
        })
    ], IonicRatingComponent);
    return IonicRatingComponent;
}());
export { IonicRatingComponent };
//# sourceMappingURL=ionic-rating-component.js.map