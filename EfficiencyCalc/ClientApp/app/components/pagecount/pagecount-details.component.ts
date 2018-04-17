import { Component, OnInit } from '@angular/core';
import { PageCount } from '../../model/pagecount';
import { PageCountService } from './services/pagecount.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './pagecount-details.component.html'
})

export class PageCountDetailsComponent implements OnInit {
    constructor(
        private pageCountService: PageCountService,
        private activatedRoute: ActivatedRoute,
        private location: Location
    ) { };

    pageTitle: string;
    urlParam: number;
    isInEditMode: boolean = true;
    pagecount: PageCount = new PageCount();

    ngOnInit(): void {
        this.detectUrlParam();
        if (this.location.isCurrentPathEqualTo("/pagecount/new-pagecount")) {
            this.pageTitle = "Nowa nieruchomość:";
        }
        else if (this.location.isCurrentPathEqualTo("/pagecount/pagecount-update/" + this.urlParam)) {
            this.pageTitle = "Update Page Count";
            this.downloadProperty();
        }
        else {
            this.pageTitle = "Page Count Details:";
            this.downloadProperty();
            this.isInEditMode = false;
        }
    }

    detectUrlParam(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.urlParam = params['id'];
        });
    }

    downloadProperty(): void {
        this.pageCountService.getPageCount(this.urlParam)
            .subscribe(
            pageCountFromDb => { this.pagecount = pageCountFromDb },
            errorObj => { console.log(errorObj) }
            );
    }

    onSubmit(pageCountObj: PageCount): void {
        if (this.location.isCurrentPathEqualTo("/pagecount/new-pagecount")) {
            this.pageCountService.addPageCount(pageCountObj).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            );
        }
        else {
            this.pageCountService.updatePageCount(pageCountObj).subscribe(
                onSuccess => console.log(onSuccess),
                onError => console.log(onError)
            );
        }
    }

    goBack(): void {
        this.location.back();
    }
}