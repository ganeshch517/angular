import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {  
    this.products = this.productService.getAllProducts();  
    console.log("product ngOnInit() called");
    
  }

}
