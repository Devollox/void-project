import { CartItem, cartService } from '@/service/cartService'
import { RedisService } from '@/service/redisService'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { memo, useEffect, useState } from 'react'
import Cart from '../icons/cart'
import Profile from '../icons/profile'
import Search from '../icons/search'
import styles from './navbar.module.css'

const redisService = new RedisService()

const Navbar = () => {
	const { data: session } = useSession()
	const [cartItems, setCartItems] = useState<CartItem[]>([])

	useEffect(() => {
		const updateSession = () => {
			redisService.setSession(session)
		}

		updateSession()
	}, [session])

	useEffect(() => {
		const subscription = cartService.cartItems$.subscribe(items => {
			setCartItems(items)
		})

		return () => {
			subscription.unsubscribe()
		}
	}, [])

	return (
		<>
			<div className={styles.container_navbar}>
				<div className={styles.wrapper_conent}>
					<div className={styles.wrapper_menu}>
						<div className={styles.logo_container}>
							<Link href='/'>
								<span className={styles.logo_text}>Void Project</span>
							</Link>
						</div>
						<div className={styles.wrapper_burger_menu}>
							<label className={styles.burger} htmlFor='burger_checkbox' />
						</div>
					</div>
					<div className={styles.wrapper_navigation_bar}>
						<Link href='/'>
							<Search />
						</Link>
						{session ? (
							<>
								<Link href='/profile'>
									<Profile />
								</Link>
							</>
						) : (
							<>
								<a
									onClick={() => {
										signIn('null', { callbackUrl: '/profile' })
									}}
								>
									<Profile />
								</a>
							</>
						)}
						<Link href='/cart' style={{ marginRight: '0' }}>
							{cartItems.length != 0 && (
								<span className={styles.length_cart}>{cartItems.length}</span>
							)}
							<Cart />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default memo(Navbar)
