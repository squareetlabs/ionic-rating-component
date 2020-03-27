import { Subject } from 'rxjs';
export declare class IonicRatingSubscriptionService {
    private starRatingSubject;
    private topicSubject;
    publishStartRatingChanged(value: number): void;
    getStartRatingChangedObservable(): Subject<any>;
    publishTopic(topic: string, value: number): void;
    getTopicObservable(key: any): Subject<any>;
}
