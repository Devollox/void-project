import { CartItem, cartService } from '@/service/cartService'
import Link from 'next/link'
import Trash from '../icons/trash'
import styles from './cart.module.css'

interface ProductCartProps {
	title: string
	description: string
	price: number
	count: number
	slug: string
	type: string
	keyfatures: string
	image: []
	data: CartItem
}

const ProductCart: React.FC<ProductCartProps> = ({
	title,
	count,
	image,
	price,
	slug,
	data,
}) => {
	const handleRemove = (itemToRemove: CartItem) => {
		cartService.removeFromCart(itemToRemove)
	}

	return (
		<>
			<div className={styles.wrapper_product_cart}>
				<div style={{ display: 'flex' }}>
					<Link href={`/catalog/${slug}`} style={{ width: '200px' }}>
						<div className={styles.product_container}>
							<div className={styles.product_title}>{title}</div>
							<div className={styles.price_new}>
								<span>{price.toLocaleString('RU-ru')} </span>RUB
							</div>
						</div>
					</Link>
					<div
						onClick={() => {
							handleRemove(data)
						}}
						className={styles.cart_delete_button}
					>
						<Trash />
					</div>
				</div>
				<div className={styles.button_buy_product}>
					<span>
						Buy <a className={styles.title_hidden}>this product</a>
					</span>
				</div>
			</div>
		</>
	)
}

export default ProductCart
