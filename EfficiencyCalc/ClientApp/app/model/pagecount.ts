export class PageCount{
    constructor();
    constructor(
        public id?: number,
        public worker?: string,
        public inspectedPages?: number,
        public associations?: number,
        public ads?: number,
        public timeSpentOnAds?: number,
        public department?: number,
        public shift?: number,
    ) { };
}
