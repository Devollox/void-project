import PageSlug from './_page'
import { CartItem } from '@/service/cartService'

interface SlugContextProps {
	catalog?: CartItem
	data: {
		data: CartItem[]
	}
}

interface Context {
	query: {
		slug: string
	}
}

export const getServerSideProps = async (context: Context) => {
	const { slug } = context.query

	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_STRAPI_SERVER}/api/products?populate=*`
		)
		const data = await response.json()
		const catalog =
			data.data.find((item: CartItem) => item.slug === slug) || null

		return {
			props: {
				catalog: catalog ? catalog : [],
			},
		}
	} catch (error) {
		return {
			props: {
				catalog: [],
			},
		}
	}
}

const SlugContext: React.FC<SlugContextProps> = ({ catalog }) => {
	return <PageSlug catalog={catalog} />
}

export default SlugContext
