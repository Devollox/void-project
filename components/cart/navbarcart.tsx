import styles from './cart.module.css'

interface NavbartCartProps {
	children?: React.ReactNode
	cartLength: number
}

const NavbartCart: React.FC<NavbartCartProps> = ({ children, cartLength }) => {
	const getItemLabel = (count: number) => {
		if (count === 1) {
			return 'PRODUCT'
		} else if (count > 1) {
			return 'GOODS'
		}
	}

	return (
		<>
			{cartLength != 0 ? (
				<>
					<div className={styles.navbar}>
						<div className={styles.wrapper_content_navbar}>
							<div className={styles.container}>
								<h2>
									{cartLength} {getItemLabel(cartLength)}
								</h2>
								{children}
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className={styles.empty_cart_container}>
						<div className={styles.empty_cart_text}>Your cart is empty</div>
						<div className={styles.empty_cart_desc}>
							<a href='/'>Click here</a>, to continue shopping{' '}
						</div>
					</div>
				</>
			)}
		</>
	)
}

export default NavbartCart
