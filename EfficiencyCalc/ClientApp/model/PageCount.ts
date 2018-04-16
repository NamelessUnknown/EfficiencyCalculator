export class PageCount{
    constructor(
        public Id: number,
        public Worker: string,
        public InspectedPages: number,
        public Associations: number,
        public Ads: number,
        public TimeSpentOnAds: number,
        public Department: number,
        public Shift: number,
    ) { };
}
