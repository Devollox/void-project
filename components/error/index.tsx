import Head from 'next/head'
import React from 'react'
import Navbar from '../navbar'

interface Props {
	status?: number | string | null
	children?: React.ReactNode
}

const Error: React.FC<Props> = ({ status, children }) => {
	return (
		<>
			<Head>
				<title>{status} — Void Project</title>
			</Head>
			<Navbar />
			<main>{children}</main>
		</>
	)
}

export default Error
