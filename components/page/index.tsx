import Head from '@/components/head'
import Navbar from '../navbar'

interface PageProps {
	title?: string
	description?: string
	children?: React.ReactNode
}

const Page: React.FC<PageProps> = ({ title, description, children }) => {
	return (
		<>
			<Head
				title={`${title ? `${title} - ` : ''}Void Project`}
				description={description}
			/>
			<div style={{ display: 'flex' }}>
				<Navbar />
				<main>
					<div className='main_content'>{children}</div>
				</main>
			</div>
		</>
	)
}

export default Page
