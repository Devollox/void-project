import NavbarCatalog from '@/components/catalog/navbarcatalog'
import Page from '@/components/page'
import { CartItem } from '@/service/cartService'
import React from 'react'

interface PageProps {
	catalog?: CartItem
}

const PageSlug: React.FC<PageProps> = ({ catalog }) => {
	if (!catalog) return

	return (
		<Page title='Catalog'>
			<NavbarCatalog
				title={catalog.title}
				count={catalog.count}
				data={catalog}
			/>
		</Page>
	)
}

export default PageSlug
