import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { global } from "./global";

@Injectable()
export class ProductService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    getProducts(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

		return this._http.get(this.url + 'products',{headers:headers});
    }
    getProduct(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.get(this.url + 'product/' + id, {headers:headers});
    }

}