import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {ReviewModel} from "../models/review.model";

@Injectable()
export class ReviewsService {
    
    public constructor(
        private http: HttpClient,
    ) {
    }
    
    public getReviews(): Observable<ReviewModel[]> {
        const mockReviews: ReviewModel[] = [
            {
                date: new Date(),
                author: '@chersviat',
                review: 'Дякую за лева   Гарно вийшло, буде можливось, прийду ще',
            },
            {
                date: new Date(),
                author: '@bogdan_ma1',
                review: 'Результатом дуже задоволений',
            },
            {
                date: new Date(),
                author: '@olga.ozerinska',
                review: 'Все супер! Нічого не болить, нічого не чухається)',
            },
            {
                date: new Date(),
                author: '@chersviat',
                review: 'Дякую за лева   Гарно вийшло, буде можливось, прийду ще',
            },
            {
                date: new Date(),
                author: '@bogdan_ma1',
                review: 'Результатом дуже задоволений',
            },
            {
                date: new Date(),
                author: '@olga.ozerinska',
                review: 'Все супер! Нічого не болить, нічого не чухається)',
            },
        ];

        return of(mockReviews)

        // TODO add endpoint to BE and add it here
        // return this.http.get<ReviewModel[]>('');
    }
}
