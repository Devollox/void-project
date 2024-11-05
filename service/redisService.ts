import { Redis } from '@upstash/redis'

interface UserData {
	id?: any
	email?: any
	name?: any
	image?: any
	count?: number
}

export class RedisService {
	private session: { user: UserData } | null = null
	private redis: Redis

	constructor() {
		this.redis = new Redis({
			url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
			token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
		})
	}

	public setSession(newSession: { user: UserData } | null) {
		this.session = newSession
		this.saveUserData()
	}

	private async saveUserData() {
		if (this.session) {
			const userId = this.session.user.id
			const currentData: any = await this.redis.get(userId)
			let userData: UserData

			if (currentData) {
				userData = currentData
				userData.count = (userData.count || 0) + 1
			} else {
				userData = {
					id: userId,
					email: this.session.user.email,
					name: this.session.user.name,
					image: this.session.user.image,
					count: 1,
				}
			}

			await this.redis.set(`${userData.id}`, JSON.stringify(userData))
		}
	}
}
