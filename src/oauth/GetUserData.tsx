import { auth } from '@src/firebase/firebase';
import { userLoginStore } from '@store/userLoginStore';
import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const GetUserData = () => {
  const [, setUserData] = useAtom(userLoginStore);
  useEffect(() => {
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

  return null;
};

export default GetUserData;
