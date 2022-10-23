import React, { FormEvent } from 'react';

import { useSearchPlace } from '@hooks/useSearchPlace';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { SearchLayout } from '@templates/Search';

const Search = () => {
  const { searchResult, searchHandler: search } = useSearchPlace();

  const searchHandler = (e: FormEvent, input: HTMLInputElement | null) => {
    e.preventDefault();
    if (input) {
      search(input.value);
    }
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        <SearchLayout searchHandler={searchHandler} result={searchResult} />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Search;
