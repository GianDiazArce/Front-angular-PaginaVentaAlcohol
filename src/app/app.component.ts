import { Component, OnInit } from '@angular/core';
import { CategoryService } from './services/category.service';
import { global } from './services/global';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CategoryService]
})
export class AppComponent {
  public title = 'app';
  public url;
  public categories;

  constructor(
    private _categoryService: CategoryService
  ){
    this.url = global.url;
  }

  ngOnInit(){
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('WebCargada');
    this.getCategories();
    
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response =>{
        if(response.status == 'success'){
          this.categories = response.categories;
        }else{
          console.log('error');
          
        }
      },
      error =>{
        console.log(error);
      }
    );
  }
  


}
