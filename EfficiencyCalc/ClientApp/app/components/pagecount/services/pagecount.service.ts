import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { PageCount } from '../../../model/PageCount';
import { PageCountBackendService } from '../../../services/pagecount-backend.service';

@Injectable()
export class PageCountService {
    constructor(private pageCountBackendService: PageCountBackendService) { }

    addPageCount(newPageCount: PageCount): Observable<number> {
        return this.pageCountBackendService.addPageCount(newPageCount);
    }
    getPageCount(propertyId: number): Observable<PageCount> {
        return this.pageCountBackendService.getPageCount(propertyId);
    }
    getManyPageCounts(): Observable<PageCount[]> {
        return this.pageCountBackendService.getManyPageCounts();
    }
    updatePageCount(updatedPageCount: PageCount): Observable<number> {
        return this.pageCountBackendService.updatePageCount(updatedPageCount);
    }
    deletePageCount(pageCountId: number): Observable<number> {
        return this.pageCountBackendService.deletePageCount(pageCountId);
    }
}