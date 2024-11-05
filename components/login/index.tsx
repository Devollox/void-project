import { signIn, signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { RedisService } from '../../service/redisService'

const redisService = new RedisService()

const LoginButton: React.FC = () => {
	const { data: session } = useSession()

	useEffect(() => {
		const updateSession = async () => {
			await redisService.setSession(session)
		}

		updateSession()
	}, [session])

	if (session) {
		return (
			<>
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}

	return (
		<>
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}

export default LoginButton
