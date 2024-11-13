import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from 'next'
import { getServerSession } from 'next-auth/next'
import { getProviders, signOut } from 'next-auth/react'
import { authOptions } from '../api/auth/[...nextauth]'

export default function SignOut({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<>
			<div>
				<button
					onClick={() => {
						signOut({ callbackUrl: '/' })
					}}
				>
					SignOut
				</button>
			</div>
		</>
	)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions)

	if (session) {
		return { redirect: { destination: '/' } }
	}

	const providers = await getProviders()

	return {
		props: { providers: providers ?? [] },
	}
}
