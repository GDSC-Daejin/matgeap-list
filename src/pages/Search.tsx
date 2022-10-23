import React, { FormEvent, useRef } from 'react';

import styled from 'styled-components';

import { Input } from '@gdsc-dju/styled-components';
import { useSearchPlace } from '@hooks/useSearchPlace';
import PlaceSection from '@organisms/PlaceSection';
import { useFlow } from '@src/stacks/homeStackFlow';
import { ContainerInner, LayoutContainer } from '@styles/layouts';
const HeaderWrapper = styled.div`
  gap: 20px;
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
const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;
const ResultCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey900};
`;
const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { searchResult, searchHandler } = useSearchPlace();
  const { push } = useFlow();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      searchHandler(inputRef.current.value);
    }
  };

  return (
    <LayoutContainer>
      <ContainerInner>
        <SearchPageContainer>
          <HeaderWrapper>
            <StyledForm onSubmit={handleSearch}>
              <Input ref={inputRef} placeholder={'지디엣시 DB에서 찾아보기'} />
            </StyledForm>
          </HeaderWrapper>
          {searchResult && (
            <>
              <ResultCount>
                총 {searchResult.length}개의 맛집이 있어요
              </ResultCount>
              <PlaceSection places={searchResult} />
            </>
          )}
        </SearchPageContainer>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Search;
