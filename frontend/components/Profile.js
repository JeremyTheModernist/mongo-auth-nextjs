import React, { useState } from 'react';
import { useEffect } from 'react';
import { useUserContext } from '../state/UserProvider';

const Profile = () => {
  const { useGetUser } = useUserContext();
  const { execute, user } = useGetUser({ redirectURL: '/profile' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(async () => {
    await execute();
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return <div>Loading ...</div>;
  }
  console.log('YOUR SET USER USER', user);
  return (
    <div>
      <h1>welcome back: {user?.username}</h1>
    </div>
  );
};

export default Profile;
