import Error from '@/components/error'
import Page from '@/components/page'
import { RedisService } from '@/service/redisService'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

const redisService = new RedisService()

const Profile = () => {
	const { data: session } = useSession()

	useEffect(() => {
		const updateSession = () => {
			redisService.setSession(session)
		}

		updateSession()
	}, [session])

	if (!session) {
		return <Error status={404} />
	}

	return (
		<>
			<Page title='Profile'>
				<button
					onClick={() => {
						signOut({ callbackUrl: '/' })
					}}
				>
					SignOut
				</button>
			</Page>
		</>
	)
}

export default Profile
