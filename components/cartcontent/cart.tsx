import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '../icons/arrowright'
import Heart from '../icons/heart'
import styles from './cart.module.css'

interface CartProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
}

const Cart: React.FC<CartProps> = ({ title, count, slug, image, price }) => {
	return (
		<>
			<div className={styles.wrapper_product_cart}>
				{count != 0 ? (
					<></>
				) : (
					<>
						{' '}
						<div className={styles.product_status}>
							<span>Нет в наличии</span>
						</div>
					</>
				)}
				<div className={styles.product_like}>
					<Heart />
				</div>
				<div className={styles.product_image}>
					<Link href={`/catalog/${slug}`}>
						<Image
							src='/DENIS___ME___VGN_DP___MARKETING.33.3.png'
							width={330}
							height={330}
							alt='/'
						/>
					</Link>
				</div>
				<div className={styles.product_info}>
					<h2 className={styles.product_title}>
						<Link href={`/catalog/${slug}`}>{title}</Link>
					</h2>
					<span className={styles.price}>{price.toLocaleString('ru-RU')}</span>
					<span className={styles.price_currency}>RUB</span>
				</div>
				<Link href={`/catalog/${slug}`} className={styles.read_more}>
					<ArrowRight />
				</Link>
			</div>
		</>
	)
}

export default Cart
