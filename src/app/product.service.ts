import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  uri :string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  addProduct(name, price) {  
    let obj = new Product();
    obj.id = 1;
     obj.name=name;
     obj.price=price;
    
     this.http.post(this.uri + 'Products', obj)
      .subscribe(res => console.log('Done'));
  }
 
  // Sending a GET request to /products
  getProducts() {
    return this.http.get(this.uri + 'Products').
      map(res => { return res });
      
  }

  // Sending a GET request to /products/:id
  public getProductById(productId: number) {
    return this
      .http
      .get(this.uri + 'Products/' + productId)
      .map(res => {
        return res;
      });
  }

  // Sending a PUT request to /products/:id
  public updateProduct(product: Product) {
    return this.http
      .put(this.uri + 'Products' + "/" + product.id, product)
      .map(res => { return res }); 
  }

  // Sending a DELETE request to /products/:id
  public deleteProductById(productId: number) {
    return this
      .http
      .delete(this.uri + 'Products' + "/" + productId)
      .map(res => {
        return res;
      });
  }
}
export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
} 
