import { data } from '@/public/swiper/data_banner.json'
import { memo } from 'react'
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
				{data.map(item => {
					return (
						<SwiperSlide>
							<SwiperContainer
								image={`/swiper/${item.image}`}
								description={`${item.title}`}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</>
	)
}

export default memo(SwiperProvider)
