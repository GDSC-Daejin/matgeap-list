import { db } from '@src/firebase/firebase';
import { User } from '@store/userLoginStore';
import { Address } from '@type/address';
import { doc, setDoc } from 'firebase/firestore';

export const addPlace = async (
  address: Address,
  user: User,
  description: string,
) => {
  const { uid, displayName } = user;
  await setDoc(doc(db, 'matgeaps', address.id), {
    ...address,
    uid: uid,
    description: description,
    displayName: displayName,
  });
};
