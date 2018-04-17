import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { PageCountComponent } from './components/pagecount/pagecount.component';
import { PageCountService } from './components/pagecount/services/pagecount.service';
import { PageCountBackendService } from './services/pagecount-backend.service';
import { HttpPageCountBackendService } from './services/http-pagecount-backend.service';
import { PageCountDetailsComponent } from './components/pagecount/pagecount-details.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PageCountComponent,
        PageCountDetailsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'pagecount', component: PageCountComponent },
            { path: 'pagecount/new-pagecount', component: PageCountDetailsComponent },
            { path: 'pagecount/pagecount-details/:id', component: PageCountDetailsComponent },
            { path: 'pagecount/update-details/:id', component: PageCountDetailsComponent },
            { path: '**', redirectTo: 'home' },
            
        ])
    ],
    providers: [
        PageCountService,
        { provide: PageCountBackendService, useClass: HttpPageCountBackendService }
    ]
})
export class AppModuleShared {
}
