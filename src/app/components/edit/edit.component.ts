import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Product: any;
  angForm: FormGroup;
  title = 'Edit Coin';
  constructor(private route: ActivatedRoute, private router: Router, private service: ProductService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  updateProduct(name, price) {
    this.Product.name = name;
    this.Product.cost = price;
    this.route.params.subscribe(params => {
      this.service.updateProduct(this.Product).subscribe(res => {
        this.router.navigate(['products'])
      });
    });
  }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.Product = this.service.getProductById(params['id']).subscribe(res => {
        this.Product = res;
      });
    });
  }
}
