import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { global } from "./global";


@Injectable()
export class CategoryService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    getCategories(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.get(this.url + 'category',{headers:headers});
    }

    getCategory(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.get(this.url + 'category/'+ id ,{headers:headers});
    }

    getProducts(id): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.get(this.url + 'product/category/'+ id ,{headers:headers});
    }

}
