import useWindowSize from '@/hook/useWindowsSize'
import Link from 'next/link'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cart from './cart'
import styles from './cart.module.css'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: []
	price: number
}

interface CartContentProps {
	data?: ProductProps[]
}

const CartContent: React.FC<CartContentProps> = ({ data }) => {
	if (data === undefined || data.length === 0) return null
	const size = useWindowSize()

	return (
		<>
			{size.width >= 1790 ? (
				<>
					<div className={styles.wrapper_cart}>
						<div className={styles.grid_cart}>
							{data.slice(0, 8).map((items: ProductProps) => {
								return (
									<Cart
										title={items.title}
										slug={items.slug}
										count={items.count}
										price={items.price}
										image={items.image}
									/>
								)
							})}
						</div>
					</div>
				</>
			) : (
				<>
					<div className={styles.wrapper_cart}>
						<Swiper
							spaceBetween={30}
							autoplay={{
								disableOnInteraction: false,
							}}
							speed={4000}
							pagination={{
								clickable: true,
							}}
							modules={[Autoplay, Pagination]}
							className='swipper_cart'
						>
							{data.slice(0, 6).map((items: ProductProps) => {
								return (
									<SwiperSlide>
										<div className={styles.mobile}>
											<Cart
												title={items.title}
												slug={items.slug}
												count={items.count}
												price={items.price}
												image={items.image}
											/>
										</div>
									</SwiperSlide>
								)
							})}
						</Swiper>
					</div>
				</>
			)}
			<div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
				<Link href='/catalog'>
					<div className={styles.button_other}>
						<span>Показать ещё</span>
					</div>
				</Link>
			</div>
		</>
	)
}

export default CartContent
