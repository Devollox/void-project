import '@/styles/globals.css'
import '@/styles/swiper.css'
import 'swiper/css/pagination'

import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<SessionProvider session={pageProps.session}>
			<ThemeProvider defaultTheme='light'>
				<Component {...pageProps} />
			</ThemeProvider>
		</SessionProvider>
	)
}

export default App
