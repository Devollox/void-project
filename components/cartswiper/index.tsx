import useWindowSize from '@/hook/useWindowsSize'
import { CartItem } from '@/service/cartService'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Cart from './cart'
import styles from './cart.module.css'

interface CartContentProps {
	data?: CartItem[]
}

const CartSwiper: React.FC<CartContentProps> = ({ data }) => {
	if (data === undefined || data.length === 0) return null
	const size = useWindowSize()

	return (
		<>
			{size.width >= 1790 ? (
				<>
					<div className={styles.wrapper_cart}>
						<div className={styles.grid_cart}>
							{data.slice(0, 8).map((items: CartItem) => {
								return (
									<Cart
										title={items.title}
										slug={items.slug}
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
							slidesPerView={'auto'}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className='swipper_cart'
						>
							{data.slice(0, 10).map((items: CartItem) => {
								return (
									<SwiperSlide>
										<Cart
											title={items.title}
											slug={items.slug}
											price={items.price}
											image={items.image}
										/>
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
						<span>Show more</span>
					</div>
				</Link>
			</div>
		</>
	)
}

export default CartSwiper
