import { doc, setDoc } from 'firebase/firestore';

import { db } from '@src/firebase/firebase';
import { User } from '@store/userLoginStore';
import { Address } from '@type/address';

export const addPlace = async (
  address: Address,
  user: User,
  description: string,
) => {
  const { uid, displayName } = user;
  const addressArray = address.place_name.split('');
  await setDoc(doc(db, 'matgeaps', address.id), {
    ...address,
    uid: uid,
    description: description,
    displayName: displayName,
    date: new Date(),
    search: [
      address.category_group_name,
      address.road_address_name,
      address.place_name,
      ...addressArray,
      displayName,
    ],
  });
};
