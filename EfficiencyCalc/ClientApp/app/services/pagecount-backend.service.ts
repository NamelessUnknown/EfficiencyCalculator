import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageCount } from '../model/PageCount';

@Injectable()
export abstract class PageCountBackendService {
    abstract addPageCount(newPageCount: PageCount): Observable<number>;

    abstract getPageCount(id: number): Observable<PageCount>;

    abstract getManyPageCounts(): Observable<PageCount[]>;

    abstract updatePageCount(updatedPageCount: PageCount): Observable<number>;

    abstract deletePageCount(pageCountId: number): Observable<number>;
}