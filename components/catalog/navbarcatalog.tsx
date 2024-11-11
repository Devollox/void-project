import { CartItem, cartService } from '@/service/cartService'
import Link from 'next/link'
import styles from './catalog.module.css'

interface NavbarCatalogProps {
	title: string
	count: number
	data?: CartItem
}

const NavbarCatalog: React.FC<NavbarCatalogProps> = ({
	title,
	count,
	data,
}) => {
	const handleAddToCart = () => {
		const cartData: CartItem = {
			title: data!.title,
			count: data!.count,
			slug: data!.slug,
			image: data!.image,
			price: data!.price,
			keyfatures: data!.keyfatures,
			description: data!.description,
			type: data!.type,
		}

		cartService.addToCart(cartData)
	}

	return (
		<>
			<div className={styles.navbar}>
				<div className={styles.wrapper_content_navbar}>
					<div className={styles.container}>
						<h2>{title}</h2>
						<div className={`${styles.button} ${styles.active}`}>
							<div className={styles.tab_button}>Description</div>
						</div>
						<div className={styles.button} style={{ padding: '0px' }}>
							<span className={styles.delimiter}></span>
						</div>
						<div className={styles.button}>
							<Link href='/download' className={styles.tab_button}>
								Download
							</Link>
						</div>
					</div>
					<div className={styles.wrapper_price}>
						<div className={styles.price_new}>
							<span>7&nbsp;499 </span>
							RUB
						</div>
						{count != 0 ? (
							<>
								<div
									onClick={() => {
										handleAddToCart()
									}}
									className={`${styles.price_title} ${styles.price_button}`}
								>
									Добавить в корзину
								</div>
							</>
						) : (
							<>
								<div className={styles.price_title}>Нет в наличии</div>
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default NavbarCatalog
