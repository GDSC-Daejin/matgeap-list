import { useEffect } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAtom } from 'jotai';

import { db } from '@src/firebase/firebase';
import { addressListStore } from '@store/searchResultsStore';
import { ApplyPlace } from '@type/address';

export const useSearchPlace = () => {
  const [searchResult, setSearchResult] = useAtom(addressListStore);

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
    const result: ApplyPlace[] = [];
    querySnapshot.forEach((doc) => {
      result.push(doc.data() as ApplyPlace);
    });
    setSearchResult(result);
  };
  useEffect(() => {
    searchHandler(undefined);
  }, []);

  return { searchResult, searchHandler } as {
    searchResult: ApplyPlace[];
    searchHandler: (input: string | undefined) => void;
  };
};
