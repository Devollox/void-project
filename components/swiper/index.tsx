import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperContainer from './swipercontainer'

const SwiperProvider = () => {
	return (
		<>
			<Swiper
				autoplay={{
					disableOnInteraction: false,
				}}
				speed={4000}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className='swiper_main'
			>
				<SwiperSlide>
					<SwiperContainer
						image='/W1-1.png'
						description='Superior build quality and luxurious comfort'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperContainer
						image='/hs2_banner.png'
						description='Classic design and stunning 7.1 sound'
					/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default SwiperProvider
