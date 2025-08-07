import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import { ProductModel } from './product.model';
@Injectable({ providedIn: "root" })
export class CrudService {
  constructor(private client: HttpClient) {

  }
  apiPath: string = "https://localhost:5000/product/";
  getProducts():Observable<ProductModel[]> {
    return this.client.get<ProductModel[]>(this.apiPath);
  }
  postProduct(model: ProductModel): Observable<ProductModel> {
    return this.client.post<ProductModel>(this.apiPath,model);
  }
  deleteProducts(id:number): Observable<ProductModel> {
    return this.client.delete<ProductModel>(this.apiPath+id);
  }
}
