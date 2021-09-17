import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products = [
    {id:1,name:"Himalayan",company:"RE"},
    {id:2,name:"Hayabusa",company:"Suzuki"},
    {id:3,name:"Ninja",company:"Kawasaki"},
    {id:4,name:"Hornet",company:"Honda"},
    {id:5,name:"Xblade",company:"Honda"}
  ];

  getAllProducts() { 
    return this.products;
  }

  getProductById(id:number) {
    return this.products.find(a => a.id == id);
  }
}
