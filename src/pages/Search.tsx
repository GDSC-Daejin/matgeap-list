import React, { FormEvent } from 'react';

import { useSearchPlace } from '@apis/useSearchPlace';
import { AppScreen } from '@stackflow/plugin-basic-ui';
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
    <AppScreen>
      <LayoutContainer>
        <ContainerInner>
          <SearchLayout searchHandler={searchHandler} result={searchResult} />
        </ContainerInner>
      </LayoutContainer>
    </AppScreen>
  );
};

export default Search;
