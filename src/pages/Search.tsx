import React, { FormEvent } from 'react';

import { useSearchPlace } from '@apis/useSearchPlace';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { SearchLayout } from '@templates/Search';

const Search = () => {
  const { searchResult, searchHandler: search } = useSearchPlace();

  const searchHandler = (e: FormEvent, input: string) => {
    e.preventDefault();
    search(input);
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
