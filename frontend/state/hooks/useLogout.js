import { useCallback } from 'react';

import { useRouter } from 'next/router';

export const useLogout = ({ redirectURL = '/' }) => {
  const router = useRouter();
  const execute = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:4002/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      if (response.ok) {
        router.push(redirectURL.toLowerCase());
      }
      return result;
    } catch (e) {
      console.log('ERROR!', e);
    }
  });
  return { execute };
};
