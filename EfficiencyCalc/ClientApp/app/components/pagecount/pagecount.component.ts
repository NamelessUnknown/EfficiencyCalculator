import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageCount } from '../../model/pagecount';
import { PageCountService } from './services/pagecount.service';

@Component({
    templateUrl: './pagecount.component.html'
})

export class PageCountComponent implements OnInit {
    constructor(
        private pageCountService: PageCountService,
        private router: Router,
    ) { };

    manyPageCounts: Array<PageCount> = new Array<PageCount>();
    pageTitle: string = "Efficiency List";
    tempInfo: string = "LOADING";


    ngOnInit(): void {
        this.downloadPageCount();
    }

    downloadPageCount(): void {
        this.pageCountService.getManyPageCounts().subscribe(
            manyPageCountsFromDb => {
                if (manyPageCountsFromDb.length == 0) {
                    this.tempInfo = "No records found."
                }
                else {
                    this.manyPageCounts = manyPageCountsFromDb;
                }
            },
            error => { console.log("Error: ", error) }
        );
    }

    getPageCount(id: number): void {
        this.router.navigate(['./pagecount/pagecount-details', id]);
    }

    updatePageCount(id: number): void {
        this.router.navigate(['./pagecount/pagecount-update', id]);
    }

    deletePageCount(id: number): void {
        this.pageCountService.deletePageCount(id).subscribe(
            onSuccess => {
                console.log(onSuccess);
                this.manyPageCounts.splice(this.manyPageCounts.findIndex(pc => pc.id === id), 1);
            },
            onError => console.log(onError)
        );
    }
}