import { useLayoutEffect } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';

import { auth } from '@src/firebase/firebase';
import { loaderStore } from '@store/loaderStore';
import { userLoginStore } from '@store/userLoginStore';

const GetUserData = () => {
  const [, setUserData] = useAtom(userLoginStore);
  const [, setLoading] = useAtom(loaderStore);
  useLayoutEffect(() => {
    if (localStorage.getItem('isLogin')) {
      setLoading(true);
    }
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('isLogin', 'true');
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
      setLoading(false);
    });
  }, []);

  return null;
};

export default GetUserData;
