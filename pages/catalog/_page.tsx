import NavbarCatalog from '@/components/catalog/navbarcatalog'
import Page from '@/components/page'
import { CartItem } from '@/service/cartService'
import React from 'react'

interface PageProps {
	catalog?: CartItem
}

const PageSlug: React.FC<PageProps> = ({ catalog }) => {
	if (!catalog) return

	let count = 1

	return (
		<Page title='Catalog'>
			<NavbarCatalog title={catalog.title!} count={count} data={catalog} />
		</Page>
	)
}

export default PageSlug
