import Head from '@/components/head'
import React, { useEffect, useState } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

interface ProductProps {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	description: string
	price: number
	slug: string
	type: string
	image: []
}

interface PageProps {
	title?: string
	description?: string
	children?: React.ReactNode
}

interface DataFooterProps {
	data: ProductProps[]
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
	const [dataFooter, setDataFooter] = useState<DataFooterProps>()

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_SERVER}/api/products?populate=*`
			)
			const data = await res.json()
			setDataFooter(data)
		}

		fetchData()
	}, [])

	console.log(dataFooter)
	return (
		<>
			<Head
				title={`${title ? `${title} - ` : ''}Void Project`}
				description={description}
			/>
			<div style={{ display: 'block' }}>
				<Navbar />
				<main>
					<div className='main_content'>{children}</div>
				</main>
				<Footer title={`${title ? `/ ${title} ` : ''}`} data={dataFooter} />
			</div>
		</>
	)
}

export default Page
