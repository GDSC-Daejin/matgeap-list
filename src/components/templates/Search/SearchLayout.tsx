import React, { FormEvent, useRef } from 'react';

import { Input } from '@gdsc-dju/styled-components';
import PlaceSection from '@organisms/PlaceSection';
import { ApplyPlace } from '@type/address';

import * as S from './styled';
import { Button, CountButtonWrapper } from './styled';

type Props = {
  result: ApplyPlace[] | null;
  searchHandler: (e: FormEvent, input: string) => void;
};

const SearchLayout = ({ result, searchHandler }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <S.SearchPageContainer>
      <S.HeaderWrapper>
        <S.StyledForm
          onSubmit={(e) =>
            inputRef.current && searchHandler(e, inputRef.current.value)
          }
        >
          <Input ref={inputRef} placeholder={'지디엣시 DB에서 찾아보기'} />
        </S.StyledForm>
      </S.HeaderWrapper>
      {result && (
        <div>
          <CountButtonWrapper>
            <S.ResultCount>총 {result.length}개의 맛집이 있어요</S.ResultCount>
            <Button onClick={(e) => searchHandler(e, '')}>전체보기</Button>
          </CountButtonWrapper>
          <PlaceSection places={result} />
        </div>
      )}
    </S.SearchPageContainer>
  );
};

export default SearchLayout;
