import styles from '@/components/cart/cart.module.css'
import NavbartCart from '@/components/cart/navbarcart'
import ProductCart from '@/components/cart/productcard'
import Page from '@/components/page'
import { CartItem, cartService } from '@/service/cartService'
import { useEffect, useState } from 'react'

const Cart = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	useEffect(() => {
		const subscription = cartService.cartItems$.subscribe(items => {
			setCartItems(items)
		})

		return () => {
			subscription.unsubscribe()
		}
	}, [])

	const handleRemove = (itemToRemove: CartItem) => {
		cartService.removeFromCart(itemToRemove)
	}

	const handleClearCart = () => {
		cartService.clearCart()
	}

	const totalPrice = cartItems.reduce((accumulator, item) => {
		return accumulator + item.price
	}, 0)

	return (
		<Page title='Cart'>
			<NavbartCart cartLength={cartItems.length}>
				<div style={{ padding: '0' }} onClick={handleClearCart}>
					<div className={styles.button}>Clear basket</div>
					{cartItems.length > 1 && (
						<>
							<div className={styles.button} style={{ padding: '0px' }}>
								<span className={styles.delimiter}></span>
							</div>
							<div className={styles.button}>Buy all product</div>
						</>
					)}
				</div>
			</NavbartCart>
			{cartItems.map(item => {
				return (
					<ProductCart
						price={item.price}
						title={item.title}
						description={item.description}
						count={item.count}
						slug={item.slug}
						type={item.type}
						keyfatures={item.keyfatures}
						image={item.image}
						data={item}
					/>
				)
			})}
			{cartItems.length >= 2 && (
				<div
					style={{ marginTop: '20px' }}
					className={`${styles.navbar} ${styles.total_price}`}
				>
					<div className={styles.total_price_text}>all product</div>
					<div className={styles.price_new}>
						<span>{totalPrice.toLocaleString('RU-ru')} </span>RUB
					</div>
				</div>
			)}
		</Page>
	)
}

export default Cart
