import React, { memo } from 'react'
import Page from '../page'
import styles from './error.module.css'

interface Props {
	status?: number | string | null
	children?: React.ReactNode
}

const Error: React.FC<Props> = ({ status, children }) => {
	return (
		<>
			<Page title='Error'>
				<div className={styles.empty_cart_container}>
					<div className={styles.empty_cart_text}>Page not found</div>
					<div className={styles.empty_cart_desc}>
						<a href='/'>Click here</a>, to continue shopping{' '}
					</div>
				</div>
			</Page>
		</>
	)
}

export default memo(Error)
