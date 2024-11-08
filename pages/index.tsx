import CartContent from '@/components/cartcontent'
import Page from '@/components/page'
import SwiperProvider from '@/components/swiper'
import React from 'react'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: []
	price: number
	description: string
}

interface ApiResponse {
	data: {
		data: ProductProps[]
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

export async function getServerSideProps() {
	const res = await fetch(
		'https://ideal-agreement-8f2bd69335.strapiapp.com/api/products?populate=*'
	)
	const data = await res.json()

	return { props: { data } }
}
