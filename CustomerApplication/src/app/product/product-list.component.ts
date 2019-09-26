import { Component, OnInit } from '@angular/core';
import { s } from '@angular/core/src/render3';
import { IProduct } from './product';
import { ProductService } from './product.service';





@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  
})
export class ProductListComponent implements OnInit{
  errorMessage: any;

constructor(private productService: ProductService){
 
}

  performFilter(filterBy: string): IProduct[] {
    filterBy=filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  title = 'Product List ';
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProduct=this.listFilter?this.performFilter(this.listFilter):this.products;
  }
  filteredProduct:IProduct[];
  products:IProduct[];
toggleImageButton(): void{
  this.showImage=!this.showImage;

}

ngOnInit():void{
  this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProduct = this.products;
    },
    error: err => this.errorMessage = err
  });

}
}
