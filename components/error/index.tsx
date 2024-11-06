import Head from 'next/head'
import React from 'react'

interface Props {
	status?: number | string | null
	children?: React.ReactNode
}

const Error: React.FC<Props> = ({ status, children }) => {
	return (
		<>
			<Head>
				<title>{status} — Devollox</title>
			</Head>

			<main>{children}</main>
		</>
	)
}

export default Error
