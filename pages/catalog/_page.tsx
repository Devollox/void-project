import Page from '@/components/page'
import React from 'react'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
	description: string
}

interface PageProps {
	catalog?: ProductProps
}

const PageSlug: React.FC<PageProps> = ({ catalog }) => {
	return (
		<Page title={catalog?.title}>
			{catalog?.price}
			{catalog?.title}
			{catalog?.description}
		</Page>
	)
}

export default PageSlug
