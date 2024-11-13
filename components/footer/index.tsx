import useWindowSize from '@/hook/useWindowsSize'
import Link from 'next/link'
import { memo } from 'react'
import Cart from './cart'
import styles from './footer.module.css'

interface ProductProps {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	title: string
	description: string
	price: number
	slug: string
	type: string
	image: []
}

interface CartContentProps {
	data?: { data: ProductProps[] }
	title?: string
}

const Footer: React.FC<CartContentProps> = ({ data, title }) => {
	const products = data?.data || []
	const size = useWindowSize()

	const uniqueTypes = Array.from(new Set(products.map(product => product.type)))

	return (
		<div className={styles.wrapper_footer}>
			<div className={styles.footer}>
				<div className={styles.pre_footer}>
					<div className={styles.logo_container}>
						<Link href='/'>
							<span className={styles.logo_text}>Void Project</span>
						</Link>
					</div>
					<div>Your «Void» side</div>
				</div>
				<div className={styles.footer_content}>
					{size.width >= 1185 ? (
						<>
							<div className={styles.footer_menu_desktop}>
								<div style={{ display: 'flex' }}>
									{uniqueTypes.slice(0, 4).map(type => {
										const filteredData = products.filter(
											product => product.type === type
										)
										const cartTitle = type[0].toUpperCase() + type.slice(1)
										return (
											<>
												<div>
													<div className={styles.desktop_text}>
														{cartTitle}
														<div style={{ marginTop: '10px' }}>
															{filteredData
																?.slice(0, 5)
																.map((items: ProductProps) => {
																	return (
																		<>
																			<Link href={`/catalog/${items.slug}`}>
																				{items.title}
																			</Link>
																		</>
																	)
																})}
														</div>
													</div>
												</div>
											</>
										)
									})}
								</div>
								<div className={styles.text_link}>
									<Link href='/company'>Company</Link>
									<Link href='/download'>Download software</Link>
									<Link href='/shop'>Shop</Link>
								</div>
							</div>
						</>
					) : (
						<>
							<div className={styles.footer_menu}>
								<ul className={styles.menu} style={{ margin: '0px' }}>
									<li className={styles.menu_item}>
										<a className={styles.menu_link}>
											<Link href={'/'}>Main</Link>
											<span className={styles.title_text}> {title}</span>
										</a>
									</li>
								</ul>
								{uniqueTypes.map(type => {
									const filteredData = products.filter(
										product => product.type === type
									)
									const cartTitle = type[0].toUpperCase() + type.slice(1)
									return (
										<Cart key={type} title={cartTitle} items={filteredData} />
									)
								})}
							</div>
							<div className={styles.text_link}>
								<Link href='/company'>
									<span>Company</span>
								</Link>
								<Link href='/download'>
									<span>Download software</span>
								</Link>
								<Link href='/shop'>
									<span>Shop</span>
								</Link>
							</div>
						</>
					)}
				</div>
				<div className={styles.copyright_footer}>
					<div>Copyright © 2022-2024 Void Project</div>
					<div>All rights stolen :)</div>
				</div>
			</div>
		</div>
	)
}

export default memo(Footer)
