import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../product.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Products: any;
  columns: string[];
  constructor(public productService: ProductService) {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(products => {
      this.Products = products;
    });
  }
  deleteProduct(id) { 
    this.productService.deleteProductById(id).subscribe(res => {
      console.log('Deleted');
      this.getProducts();
    });
  }
  ngOnInit() {
  }

}
