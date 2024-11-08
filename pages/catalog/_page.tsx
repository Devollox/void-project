import React, { useEffect, useState } from 'react'

interface PageProps {
	catalog?: string
}

interface Product {
	title: string
	slug: string
}

const Page: React.FC<PageProps> = ({ catalog }) => {
	const [data, setData] = useState<Product | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://ideal-agreement-8f2bd69335.strapiapp.com/api/products?filters[slug][$eq]=${catalog}`
			)
			const result = await response.json()
			setData(result.data[0])
		}

		if (catalog) {
			fetchData()
		}
	}, [catalog])

	return <>{data?.slug}</>
}

export default Page
