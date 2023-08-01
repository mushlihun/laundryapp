import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: "root",
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'T-Shirt', price: 2.00, amount: 0 },
    { id: 1, name: 'Jeans', price: 3.00, amount: 0 },
    { id: 2, name: 'Shirt', price: 4.00, amount: 0 },
    { id: 3, name: 'Jacket', price: 4.00, amount: 0 },
    { id: 4, name: 'Short', price: 2.00, amount: 0 },
    { id: 5, name: 'Blouse', price: 3.00, amount: 0 },
    { id: 6, name: 'Dress', price: 4.00, amount: 0 },
    { id: 7, name: 'Skirt', price: 2.00, amount: 0 },
    { id: 8, name: 'Socks', price: 1.00, amount: 0 },
  ];
  
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts(): Product[] {
    return this.data;
  }

  getCart(): Product[] {
    console.log("this.cart: ", this.cart);
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addProduct(product: Product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
			product.amount = 1;
			this.cart.push(product);
			console.log(`product ${product.name} pushed to cart`);
		}
		this.cartItemCount.next(this.cartItemCount.value + 1);
  }

	decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
