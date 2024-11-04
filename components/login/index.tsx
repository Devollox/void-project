import React, {useEffect, useState} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { RedisService } from '../../service/redisService';

const redisService = new RedisService();

const LoginButton: React.FC = () => {
  const { data: session } = useSession()
  const [userCount, setUserCount] = useState<number | null>(null);

  useEffect(() => {
    const updateSession = async () => {
      await redisService.setSession(session);
      if (session) {
        const count = await redisService.getUserCount();
        setUserCount(count);
      }
    };

    updateSession();
  }, [session]);

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>

        {userCount && (
          <>
            {userCount + 1} раз - Вы на сайте
          </>
        )}
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