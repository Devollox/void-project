import { RedisService } from '@/service/redisService'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import Cart from '../icons/cart'
import Profile from '../icons/profile'
import Search from '../icons/search'
import styles from './navbar.module.css'

const redisService = new RedisService()

const Navbar = () => {
	const { data: session } = useSession()

	useEffect(() => {
		const updateSession = () => {
			redisService.setSession(session)
		}

		updateSession()
	}, [session])

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
							<Cart />
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
