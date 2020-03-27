import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IonicRatingSubscriptionService {
  private starRatingSubject = new Subject<number>();
  private topicSubject = new Subject<{ [key: string]: any }>();

  publishStartRatingChanged(value: number) {
    this.starRatingSubject.next(value);
  }

  getStartRatingChangedObservable(): Subject<any> {
    return this.starRatingSubject;
  }

  publishTopic(topic: string, value: number) {
    this.topicSubject.next({ topic, value });
  }

  getTopicObservable(key): Subject<any> {
    return this.topicSubject[key];
  }
}
