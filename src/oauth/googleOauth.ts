import { auth, provider } from '@src/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export const googleOauth = async () => {
  const result = await signInWithPopup(auth, provider);
  const credential = await GoogleAuthProvider.credentialFromResult(result);
  if (!credential) return;
  const token = credential.accessToken;
  const user = result.user;

  return { token, user };
};
