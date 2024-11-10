import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'ideal-agreement-8f2bd69335.media.strapiapp.com',
			'http://localhost:1337/',
			'http://localhost:1337',
			'localhost',
		],
	},
}

export default nextConfig
