import React, {useState, useCallback} from 'react'
import { useRouter } from 'next/router';

export const useSignup = ({redirectURL = '/'}) => {
    const router = useRouter();
    const execute = useCallback((formData) => {
        const makeRequest = async () => {
            try {
              const response = await fetch('http://localhost:4002/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
              })
              const userResult = await response.json()
              if(response.ok){
                router.push(redirectURL.toLowerCase())
              }
              return userResult;
            } catch(e){
              console.log("ERROR!",e)
            }
          }
        makeRequest();
    })
    return {execute}
}

