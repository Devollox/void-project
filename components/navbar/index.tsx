import Link from 'next/link'
import Cart from '../icons/cart'
import Profile from '../icons/profile'
import Search from '../icons/search'
import styles from './navbar.module.css'

const Navbar = () => {
	return (
		<>
			<div className={styles.container_navbar}>
				<div className={styles.wrapper_conent}>
					<div className={styles.wrapper_menu}>
						<div className={styles.logo_container}>
							<span className={styles.logo_text}>ПУСТОТА ПРОДЖЕКТ</span>
						</div>
						<div className={styles.wrapper_burger_menu}>
							<label className={styles.burger} htmlFor='burger_checkbox' />
						</div>
					</div>
					<div className={styles.wrapper_navigation_bar}>
						<Link href='/'>
							<Search />
						</Link>
						<Link href='/profile'>
							<Profile />
						</Link>
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
