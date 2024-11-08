import CartContent from '@/components/cartcontent'
import Page from '@/components/page'
import SwiperProvider from '@/components/swiper'

const VoidProject = () => {
	return (
		<>
			<Page>
				<SwiperProvider />
				<CartContent />
			</Page>
		</>
	)
}

export default VoidProject
