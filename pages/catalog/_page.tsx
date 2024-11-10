import Page from '@/components/page'
import React from 'react'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
	keyfatures: string
	description: string
}

interface PageProps {
	catalog?: ProductProps
}

const PageSlug: React.FC<PageProps> = ({ catalog }) => {
	if (!catalog) return

	return (
		<Page title='Catalog'>
			{catalog?.price}
			{catalog?.title}
			{catalog?.description}
			{catalog?.keyfatures}
		</Page>
	)
}

export default PageSlug
