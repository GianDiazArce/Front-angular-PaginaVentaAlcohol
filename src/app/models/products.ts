export class Product{
    constructor(
        public id:number,
        public category_id: number,
        public name:string,
        public description:string,
        public stock:number,
        public price:number,
        public size:string,
        public image:string
    ){}
}