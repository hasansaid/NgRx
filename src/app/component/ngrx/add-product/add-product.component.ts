import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      unitPrice: ['', Validators.required],
      stock: ['', Validators.required],
    });
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe();
    console.log(this.productForm.value);
  }
}
