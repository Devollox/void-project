import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import SwiperContainer from './swipercontainer'

const SwiperProvider = () => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null)

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
						description='Превосходное качество сборки и исключительный комфорт'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<SwiperContainer
						image='/hs2_banner.png'
						description='Классический дизайн и потрясающий 7.1 звук'
					/>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default SwiperProvider