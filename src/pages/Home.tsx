import React, { FormEvent, useEffect, useRef } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { useKakaoSearch } from '@apis/useKakaoSearch';
import { useSearchPlace } from '@apis/useSearchPlace';
import { Input } from '@gdsc-dju/styled-components';
import KakaoMap from '@molecules/KakaoMap';
import PopModal from '@organisms/PopModal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { modalStore } from '@store/modalStore';
import { addressListStore } from '@store/searchResultsStore';
import { selectPlaceStore } from '@store/selectPlaceStore';
import { LayoutContainer } from '@styles/layouts';
import { isMobile } from '@utils/checkMobile';

const InputHeader = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  margin: 0 auto;
  z-index: 10;
  flex: 0;
  position: fixed;
  top: 10px;
  right: 0;
  left: 0;
  width: 100vw;
`;
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeaderWrapper = styled.div`
  gap: 20px;
  padding: 0 20px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  background: #fff;
  cursor: pointer;
  outline: none;
`;
const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<kakao.maps.Map>(null);
  const [result, setResult] = useAtom(addressListStore);
  const [selectedPlace, setSelectedPlace] = useAtom(selectPlaceStore);
  const [isModalOpen, setIsModalOpen] = useAtom(modalStore);

  const { searchHandler } = useSearchPlace();

  const { searchPlaces } = useKakaoSearch();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current && mapRef.current) {
      searchPlaces(inputRef.current.value, mapRef.current.getCenter());
    }
    isMobile() && setIsModalOpen(true);
  };

  useEffect(() => {
    if (result === null) {
      (async () => {
        await searchHandler(undefined);
      })();
    }
  }, []);

  return (
    <AppScreen>
      <HomeContainer>
        <PopModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          searchResult={result}
        />
        <InputHeader>
          <HeaderWrapper>
            <StyledForm onSubmit={handleSearch}>
              <Input ref={inputRef} placeholder={'??????, ?????? ????????????'} />
            </StyledForm>
            <StyledButton onClick={() => searchHandler(undefined)}>
              ???????????? DB??????
            </StyledButton>
          </HeaderWrapper>
        </InputHeader>
        <LayoutContainer>
          <KakaoMap
            ref={mapRef}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            markers={result}
          />
        </LayoutContainer>
      </HomeContainer>
    </AppScreen>
  );
};

export default Home;
