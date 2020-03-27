import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IonicRatingSubscriptionService } from '..';
export declare class IonicRatingComponent implements ControlValueAccessor, OnInit {
    private ionic5StartRatingSubscriptionService;
    ngOnInit(): void;
    readonly eventInfo: {
        topic: string;
    };
    private _rating;
    private onChange;
    private onTouched;
    disabled: boolean;
    writeValue(obj: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    rating: number;
    ratingChanged: EventEmitter<number>;
    readonly: string;
    activeColor: string;
    defaultColor: string;
    activeIcon: string;
    defaultIcon: string;
    halfIcon: string;
    halfStar: string;
    maxRating: number;
    fontSize: string;
    Math: any;
    parseFloat: any;
    iconsArray: number[];
    constructor(ionic5StartRatingSubscriptionService: IonicRatingSubscriptionService);
    changeRating(event: any): void;
}
