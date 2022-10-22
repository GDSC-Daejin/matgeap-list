import React, { FormEvent, useRef } from 'react';

import styled from 'styled-components';

import { Input } from '@gdsc-dju/styled-components';
import { useSearchPlace } from '@hooks/useSearchPlace';
import { ReviewPlaceCard } from '@molecules/PlaceCard';
import { useSearchFlow } from '@src/stacks/searchStackFlow';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
import { ApplyPlace } from '@type/address';
const HeaderWrapper = styled.div`
  gap: 20px;
  padding: 0 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  box-sizing: border-box;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;
const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchResult, searchHandler } = useSearchPlace();
  const { push } = useSearchFlow();
  console.log(searchResult);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      searchHandler(inputRef.current.value);
    }
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        <HeaderWrapper>
          <StyledForm onSubmit={handleSearch}>
            <Input ref={inputRef} placeholder={'지역, 지점 검색하기'} />
          </StyledForm>
        </HeaderWrapper>
        <div>
          {searchResult &&
            searchResult.map((place: ApplyPlace) => (
              <ReviewPlaceCard
                place={place}
                key={place.id}
                onClick={() => {
                  push('PlaceDetail', { placeId: place.id });
                }}
              />
            ))}
        </div>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default SearchPage;
