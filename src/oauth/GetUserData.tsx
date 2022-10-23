import { useEffect, useLayoutEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';

import { auth } from '@src/firebase/firebase';
import { loaderStore } from '@store/loaderStore';
import { userLoginStore } from '@store/userLoginStore';

const GetUserData = () => {
  const [user, setUserData] = useAtom(userLoginStore);
  const [, setLoading] = useAtom(loaderStore);
  useLayoutEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setLoading(true);
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          // @ts-ignore
          accessToken: user.accessToken,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      }
    });
  }, []);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return null;
};

export default GetUserData;
