import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PageCount } from '../model/PageCount';
import { PageCountBackendService } from '../services/pagecount-backend.service'
import { Http, RequestOptions, Headers, Response } from '@angular/http';

@Injectable()
export class HttpPageCountBackendService extends PageCountBackendService {
	private addPageCountUrl: string = "api/pagecount/addpagecount";
	private getPageCountUrl: string = "api/pagecount/getpagecount?pagecountId=";
	private getManyPageCountsUrl: string = "api/pagecount/getmanypagecounts";
	private updatePageCountUrl: string = "api/pagecount/updatepagecount";
	private deletePageCountUrl: string = "api/pagecount/deletepagecount?pagecountId="

	private jsonContentOptions: RequestOptions;
	constructor(private http: Http) {
		super();
		let headersJson: Headers = new Headers({
			'Content-Type': 'application/json',
		});
		this.jsonContentOptions = new RequestOptions({ headers: headersJson })
	}

	addPageCount(newPageCount: PageCount): Observable<number> {
        return this.http.post(this.addPageCountUrl, JSON.stringify(newPageCount), this.jsonContentOptions).
			map(response => response.json() as number);
	}
	getPageCount(id: number): Observable<PageCount> {
		return this.http.get(this.getPageCountUrl + id, this.jsonContentOptions).map(response => response.json());
	}
	getManyPageCounts(): Observable<PageCount[]> {
		return this.http.get(this.getManyPageCountsUrl, this.jsonContentOptions).map(response => response.json());
	}
	updatePageCount(updatedPageCount: PageCount): Observable<number> {
        return this.http.post(this.updatePageCountUrl, JSON.stringify(updatedPageCount), this.jsonContentOptions).
			map(response => response.json() as number);
	}
	deletePageCount(pageCountId: number): Observable<number> {
        return this.http.get(this.deletePageCountUrl + pageCountId, this.jsonContentOptions).
			map(response => response.json());
	}

}