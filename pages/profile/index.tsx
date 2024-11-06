import Page from '@/components/page'
import { RedisService } from '@/service/redisService'
import { signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

const redisService = new RedisService()

const Profile = () => {
	const { data: session } = useSession()

	useEffect(() => {
		const updateSession = async () => {
			await redisService.setSession(session)
		}

		updateSession()
	}, [session])

	if (!session) {
		return <>no!</>
	}

	return (
		<>
			<Page title='Profile'>
				<div
					onClick={() => {
						signOut({ callbackUrl: '/' })
					}}
				>
					Выйти нахуй из сестемы и не позорься!
				</div>
			</Page>
		</>
	)
}

export default Profile
