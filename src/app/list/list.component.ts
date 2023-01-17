import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  formProduct!: FormGroup;
  products: Product[]=[];
  product!: Product | null;

  check: boolean= false;


 constructor(private formGroup: FormBuilder,private productService: ProductService) {
 }

  ngOnInit(): void {
   this.formProduct=this.formGroup.group({
     id:[''],
     name:[''],
     price:[''],
     quantity:[''],
     image:['']
   });
  }
  formP(){
   const product={
     id:this.formProduct?.value.id,
     name:this.formProduct?.value.name,
     price:this.formProduct?.value.price,
     quantity:this.formProduct?.value.quantity,
     image:this.formProduct?.value.image,
   };
   this.productService.formP(product);
   this.products=this.productService.products;
   this.formProduct.reset();
  }

  editProduct(id:number){
   this.product=this.productService.getById(id);
   if (this.product!=null){
     this.formProduct.patchValue(this.product)
   }
  }

  deleteProduct(id:number,name:string){}

}
