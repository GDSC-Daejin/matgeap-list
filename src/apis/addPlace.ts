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
  function createSearchArray(address: string) {
    const 공백제거 = address.replace(' ', '');
    const searchArray: string[] = [];
    for (let i = 0; i < 공백제거.length; i++) {
      for (let j = i + 1; j <= 공백제거.length; j++) {
        searchArray.push(공백제거.slice(i, j));
      }
    }
    return searchArray;
  }

  await setDoc(doc(db, 'matgeaps', address.id), {
    ...address,
    uid: uid,
    description: description,
    displayName: displayName,
    date: new Date(),
    search: [
      ...createSearchArray(address.place_name),
      ...createSearchArray(address.road_address_name),
      ...createSearchArray(address.category_group_name),
      ...createSearchArray(address.category_name),
      displayName,
    ],
  });
};
