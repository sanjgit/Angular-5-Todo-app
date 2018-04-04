
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  debugger;
  title = 'Add Product';
  angForm: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  addProduct(name, price) {
    this.productService.addProduct(name, price);
    this.router.navigate(['products']);
  }
  ngOnInit() {
  }
}
