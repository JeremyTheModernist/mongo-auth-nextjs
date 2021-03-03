import { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

export const useGetUser = ({ redirectURL = '/' }) => {
  const [user, setUser] = useState({ id: null, username: null, email: null });
  const router = useRouter();
  const execute = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4002/profile', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      if (response.ok) {
        setUser(result);
        router.push(redirectURL.toLowerCase());
      }
      return result;
    } catch (e) {
      console.log('ERROR!', e);
    }
  });
  return { execute, user };
};
