import { BehaviorSubject } from 'rxjs'

export interface CartItem {
	slug?: string
	name?: string
	price?: number
}

export class CartService {
	private cartItemsSubject: BehaviorSubject<CartItem[]> = new BehaviorSubject<
		CartItem[]
	>([])
	public cartItems$ = this.cartItemsSubject.asObservable()

	constructor() {
		if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
			const savedItems: CartItem[] = JSON.parse(
				localStorage.getItem('cartItems') || '[]'
			)
			this.cartItemsSubject.next(savedItems)
		}
	}

	public addToCart(item: CartItem): void {
		const currentItems = this.cartItemsSubject.getValue()
		const existingItemIndex = currentItems.findIndex(i => i.slug === item.slug)
		if (existingItemIndex >= 0) {
			return
		}
		this.cartItemsSubject.next([...currentItems, item])
		if (typeof window !== 'undefined') {
			localStorage.setItem('cartItems', JSON.stringify([...currentItems, item]))
		}
	}

	public removeFromCart(itemToRemove: CartItem): void {
		const currentItems = this.cartItemsSubject.getValue()
		const updatedItems = currentItems.filter(
			item => item.slug !== itemToRemove.slug
		)
		this.cartItemsSubject.next(updatedItems)
		if (typeof window !== 'undefined') {
			localStorage.setItem('cartItems', JSON.stringify(updatedItems))
		}
	}

	public clearCart() {
		this.cartItemsSubject.next([])
		localStorage.setItem('cartItems', JSON.stringify([]))
	}
}
