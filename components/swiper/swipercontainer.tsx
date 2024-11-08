import Image from 'next/image'
import Link from 'next/link'
import styles from './swiper.module.css'

interface SwiperContainerProps {
	image: string
	description: string
}

const SwiperContainer: React.FC<SwiperContainerProps> = ({
	image,
	description,
}) => {
	return (
		<>
			<Image src={image} width={1680} height={720} alt='Image' />
			<div className={styles.wrapper_swiper_content}>
				<div className={styles.swiper_content_inside}>
					<div className={styles.swiper_description}>{description}</div>
					<button className={styles.swiper_button}>
						<Link href='/catalog'>Показать</Link>
					</button>
				</div>
			</div>
		</>
	)
}
export default SwiperContainer
