import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { global } from 'src/app/services/global';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss'],
  providers: [CategoryService, ProductService]
})
export class CategoryDetailComponent implements OnInit {
  public url;
  public category: Category;
  public products;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService,
    private _productService: ProductService
  ) { 
    this.url = global.url;
    this.products = [];
  }

  ngOnInit() {
    this.getProductsByCategory();
  }

  getProductsByCategory(){
    this._route.params.subscribe(params =>{
      let id = +params['id']
      this._categoryService.getCategory(id).subscribe(
        response =>{
          
          if(response.status == 'success'){
            this.category = response.category;
            console.log(this.category);  
            this._categoryService.getProducts(id).subscribe(
              response =>{

                if(response.status == 'success'){
                  this.products = response.products;
                  console.log(this.products);
                  
                }else{
                  console.log('No existen productos');
                  
                }
                
              },
              error => {
                console.log(error);
                
              }
            )     

            

          }else{
            this._router.navigate(['home']);
          }
          
        },
        error => {
          console.log(error);
          
        }
      );
    })
    
    
  }

}
