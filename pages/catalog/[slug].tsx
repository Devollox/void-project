import PageSlug from './_page'

interface ProductProps {
	title: string
	count: number
	slug: string
	image: string
	price: number
	description: string
}

interface SlugContextProps {
	catalog?: ProductProps
}

interface Context {
	query: {
		slug: string
	}
}

export const getServerSideProps = async (context: Context) => {
	const { slug } = context.query
	const response = await fetch(
		`https://ideal-agreement-8f2bd69335.strapiapp.com/api/products?populate=*?filters[slug][$eq]=${slug}`
	)
	const result = await response.json()

	return {
		props: {
			catalog: result.data[0],
		},
	}
}

const SlugContext: React.FC<SlugContextProps> = ({ catalog }) => {
	return <PageSlug catalog={catalog} />
}

export default SlugContext
