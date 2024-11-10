import PageSlug from './_page'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
	keyfatures: string
	description: string
}

interface SlugContextProps {
	catalog?: ProductProps
	data: {
		data: ProductProps[]
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
			`${process.env.STRAPI_SERVER}/api/products?populate=*`
		)
		const data = await response.json()
		const catalog =
			data.data.find((item: ProductProps) => item.slug === slug) || null

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
