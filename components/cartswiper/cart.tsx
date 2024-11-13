import { CartItem } from '@/service/cartService'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '../icons/arrowright'
import Heart from '../icons/heart'
import styles from './cart.module.css'

const Cart: React.FC<CartItem> = ({ title, slug, image, price }) => {
	let backgroundImage: any = image!.find((item: any) => item.name === '1.png')
	let count = 1
	return (
		<>
			<div className={styles.wrapper_product_cart}>
				{count != 0 ? (
					<></>
				) : (
					<>
						<div className={styles.product_status}>
							<span>Not available</span>
						</div>
					</>
				)}
				<div className={styles.product_like}>
					<Heart />
				</div>
				<div className={styles.product_image}>
					<Link href={`/catalog/${slug}`}>
						<Image
							src={`http://localhost:1337${backgroundImage.url}`}
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
					<span className={styles.price}>
						<div>
							{price!.toLocaleString('ru-RU')}
							<span className={styles.price_currency}>RUB</span>
						</div>
						<div>
							<Link href={`/catalog/${slug}`} className={styles.read_more}>
								<ArrowRight />
							</Link>
						</div>
					</span>
				</div>
			</div>
		</>
	)
}

export default Cart
