import CartContent from '@/components/cartcontent'
import Page from '@/components/page'
import SwiperProvider from '@/components/swiper'
import React from 'react'

interface ProductProps {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	description: string
	price: number
	count: number
	slug: string
	type: string
	keyfatures: string
	image: []
}

interface ApiResponse {
	data: {
		data: ProductProps[]
	}
}

export async function getServerSideProps() {
	try {
		const res = await fetch(
			`${process.env.STRAPI_SERVER}/api/products?populate=*`
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
				<CartContent data={data.data} />
			</Page>
		</>
	)
}

export default VoidProject
