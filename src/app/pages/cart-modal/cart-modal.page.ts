import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.services';
import { Product } from '../../services/cart.services';
import { ModalController } from '@ionic/angular';

@Component({
	selector: 'app-cart-modal',
	templateUrl: './cart-modal.page.html',
	styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
	cart: Product[] = [];
	message: any

	constructor(
		private cartService: CartService,
		private modalCtrl: ModalController
	) {}

	ngOnInit() {
		this.cart = this.cartService.getCart();
	}
	display(){
		this.message = "Confirmed";
		alert (this.message)
	}

	decreaseCartItem(product: Product): void {
		this.cartService.decreaseProduct(product);
	}

	increaseCartItem(product: Product): void {
		this.cartService.addProduct(product);
	}

	removeCartItem(product: Product): void {
		this.cartService.removeProduct(product);
	}

	getTotal(): number {
		return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
	}

	close(): void {
		this.modalCtrl.dismiss();
	}

	checkout() {}
}
