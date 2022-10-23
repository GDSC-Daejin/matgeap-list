import {
  browserLocalPersistence,
  setPersistence,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

import { auth, provider } from '@src/firebase/firebase';

export const googleLogin = async () => {
  await localStorage.setItem('isLogin', 'true');
  await setPersistence(auth, browserLocalPersistence);
  await signInWithRedirect(auth, provider);
};
export const googleLogout = async () => {
  signOut(auth);
};
