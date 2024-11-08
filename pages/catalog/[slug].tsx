import Page from './_page'

interface SlugContextProps {
	catalog?: any
}

interface Context {
	query: {
		slug: string
	}
}

export const getServerSideProps = async (context: Context) => {
	const { slug } = context.query

	return {
		props: {
			catalog: slug,
		},
	}
}

const SlugContext: React.FC<SlugContextProps> = ({ catalog }) => {
	return <Page catalog={catalog} />
}

export default SlugContext
