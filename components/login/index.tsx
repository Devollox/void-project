import { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN,
});

const LoginButton = () => {
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const userData = {
          email: session?.user?.email,
          name: session?.user?.name,
          image: session?.user?.image,
        };
        await redis.set(`${session?.user?.email}`, JSON.stringify(userData));
      }
    };

    fetchData();
  }, [session]);

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default LoginButton;