import CartSwiper from '@/components/cartswiper'
import Page from '@/components/page'
import SwiperProvider from '@/components/swiper'
import { CartItem } from '@/service/cartService'
import React from 'react'

interface ApiResponse {
	data: {
		data: CartItem[]
	}
}

export async function getServerSideProps() {
	try {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_SERVER}/api/products?populate=*`
		)
		const data = await res.json()

		return {
			props: {
				data: data ? data : [],
			},
		}
	} catch (error) {
		return {
			props: {
				data: [],
			},
		}
	}
}

const VoidProject: React.FC<ApiResponse> = ({ data }) => {
	return (
		<>
			<Page>
				<SwiperProvider />
				<CartSwiper data={data.data} />
			</Page>
		</>
	)
}

export default VoidProject
