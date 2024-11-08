import { useLayoutEffect, useState } from 'react'
import Cart from './cart'
import styles from './cart.module.css'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
}

interface ApiResponse {
	data: ProductProps[]
}

const CartContent = () => {
	const [users, setUsers] = useState<ApiResponse | undefined>(undefined)

	const getApiData = async () => {
		const response = await fetch(
			'https://ideal-agreement-8f2bd69335.strapiapp.com/api/products?populate=*'
		).then(response => response.json())

		setUsers(response)
	}

	useLayoutEffect(() => {
		getApiData()
	}, [])

	if (users === undefined || users.data.length === 0) return null
	return (
		<>
			<div className={styles.wrapper_cart}>
				{users.data.map(items => {
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
		</>
	)
}

export default CartContent
