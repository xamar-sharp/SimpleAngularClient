import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core'
import { CrudService } from './crud.service';
import { ProductModel } from './product.model';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'product-component', templateUrl: './product.component.html', styleUrls: ['./product.component.css'], standalone: false,
  changeDetection: ChangeDetectionStrategy.Default })
export class ProductComponent implements OnInit {
  public products: ProductModel[] = [{id:1,name:"Prod",price:333}];
  public deleteId: number = 0;
  public productName: string = '';
  public price: number = 0;
  constructor(private crud: CrudService,private cdr: ChangeDetectorRef) { }
  ngOnInit() {
    this.getProducts();
    this.cdr.detectChanges();
  }
  getProducts() {
    this.crud.getProducts().subscribe((result) => {
      this.products = result;
      this.cdr.detectChanges();
    });
  }
  addProduct() {
    let model = { name: this.productName, id: 0, price: this.price };
    this.crud.postProduct(model).subscribe((result) => {
      this.products.push(result);
      this.cdr.detectChanges();
    });
  }
  dropProduct() {
    this.crud.deleteProducts(this.deleteId).subscribe((result) => {
      let ind = this.products.findIndex((product, index, products) => {
        return result.id === product.id;
      });
      this.products.splice(ind, 1);
      this.cdr.detectChanges();
    });
  }
}
