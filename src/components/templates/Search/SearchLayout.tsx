import React, { FormEvent, useRef } from 'react';

import { Input } from '@gdsc-dju/styled-components';
import PlaceSection from '@organisms/PlaceSection';
import { ApplyPlace } from '@type/address';

import * as S from './styled';

type Props = {
  result: ApplyPlace[];
  searchHandler: (e: FormEvent, input: HTMLInputElement | null) => void;
};

const SearchLayout = ({ result, searchHandler }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <S.SearchPageContainer>
      <S.HeaderWrapper>
        <S.StyledForm onSubmit={(e) => searchHandler(e, inputRef.current)}>
          <Input ref={inputRef} placeholder={'지디엣시 DB에서 찾아보기'} />
        </S.StyledForm>
      </S.HeaderWrapper>
      {result && (
        <>
          <S.ResultCount>총 {result.length}개의 맛집이 있어요</S.ResultCount>
          <PlaceSection places={result} />
        </>
      )}
    </S.SearchPageContainer>
  );
};

export default SearchLayout;
