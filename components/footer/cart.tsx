import Link from 'next/link'
import { useState } from 'react'
import styles from './footer.module.css'

interface ProductProps {
	title: string
	slug: string
	image: []
	price: number
}

interface CartProps {
	title: string
	items?: any
}

const Cart: React.FC<CartProps> = ({ title, items }) => {
	const [activite, setActivite] = useState(false)

	return (
		<>
			<ul className={styles.menu}>
				<li
					className={styles.menu_item}
					onClick={() => {
						setActivite(!activite)
					}}
				>
					<a className={styles.menu_link}>{title}</a>
					<div
						className={styles.footer_menu_arrow}
						style={{
							rotate: `${activite === false ? '0deg' : '180deg'}`,
						}}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='7'
							height='4'
							viewBox='0 0 7 4'
						>
							<path
								d='M7,0,3.5,4,0,0Z'
								transform='translate(7 4) rotate(180)'
								fill='#fff'
								opacity='0.65'
							/>
						</svg>
					</div>
					<ul
						className={`${styles.menu_hidden} ${
							activite ? styles.menu_visible : ''
						}`}
					>
						<li>
							{items?.map((item: ProductProps) => {
								return (
									<Link key={item.slug} href={`/catalog/${item.slug}`}>
										{item.title}
									</Link>
								)
							})}
						</li>
					</ul>
				</li>
			</ul>
		</>
	)
}

export default Cart
