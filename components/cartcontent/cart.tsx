import Link from 'next/link'
import Arrowright from '../icons/arrowright'
import Heart from '../icons/heart'
import styles from './cart.module.css'

interface CartProps {
	title: string
	count: number
	slug: string
	image: []
	price: number
}

const Cart: React.FC<CartProps> = ({ title, count, slug, image, price }) => {
	let backgroundImage: any = image.find((item: any) => item.name === '1.png')
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
						<img src={backgroundImage.url} width={330} height={330} alt='/' />
					</Link>
				</div>
				<div className={styles.product_info}>
					<h2 className={styles.product_title}>
						<Link href={`/catalog/${slug}`}>{title}</Link>
					</h2>
					<span className={styles.price}>
						<div>
							{price.toLocaleString('ru-RU')}
							<span className={styles.price_currency}>RUB</span>
						</div>
						<div>
							<Link href={`/catalog/${slug}`} className={styles.read_more}>
								<Arrowright />
							</Link>
						</div>
					</span>
				</div>
			</div>
		</>
	)
}

export default Cart
