import { useEffect, useState } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db } from '@src/firebase/firebase';
import { ApplyPlace } from '@type/address';

export const useSearchPlace = () => {
  const [searchResult, setSearchResult] = useState<unknown>([]);

  const searchHandler = async (input: string | undefined) => {
    if (searchResult) {
      setSearchResult([]);
    }
    const q = input
      ? query(
          collection(db, 'matgeaps'),
          where('search', 'array-contains-any', [input]),
        )
      : query(collection(db, 'matgeaps'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setSearchResult((prev: any) => [...prev, doc.data()]);
    });
  };
  useEffect(() => {
    searchHandler(undefined);
  }, []);

  return { searchResult, searchHandler } as {
    searchResult: ApplyPlace[];
    searchHandler: (input: string | undefined) => void;
  };
};
