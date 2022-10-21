import { auth, provider } from '@src/firebase/firebase';
import {
  browserLocalPersistence,
  setPersistence,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

export const googleLogin = async () => {
  await setPersistence(auth, browserLocalPersistence);
  await signInWithRedirect(auth, provider);
};
export const googleLogout = async () => {
  signOut(auth);
};
