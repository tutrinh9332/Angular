import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  id: number = 1;
  products: Product[] = [];

  constructor() {
  }

  formP(product: Product) {
    if (product.id.toString() == '') {
      product.id = this.id
      this.products.push(product)
      this.id++
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == product.id) {
          this.products[i] = product;
        }
      }
    }
  }

  getById(id:number|string): Product | null{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id==id){
        return this.products[i];
      }
    }
    return null
  }
}
