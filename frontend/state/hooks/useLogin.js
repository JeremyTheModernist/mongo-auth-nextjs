import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';

// https://nextjs.org/docs/api-reference/next/router#usage-2

export const useLogin = ({ redirectURL = '/' }) => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const execute = useCallback((formData) => {
    const makeRequest = async () => {
      try {
        const response = await fetch('http://localhost:4002/login', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const userResult = await response.json();
        if (response.ok) {
          router.push(redirectURL.toLowerCase());
        } else {
          setIsError(userResult);
        }
        return userResult;
      } catch (e) {
        console.log('ERROR!', e);
      }
    };
    makeRequest();
  });
  return { isError, execute };
};
