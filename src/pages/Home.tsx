import React, { FormEvent, useEffect, useRef } from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { useGetCurrentLocation } from '@apis/useGetCurrentLocation';
import { useKakaoSearch } from '@apis/useKakaoSearch';
import { Input } from '@gdsc-dju/styled-components';
import KakaoMap from '@molecules/KakaoMap';
import PopModal from '@organisms/PopModal';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { modalStore } from '@store/modalStore';
import { addressListStore } from '@store/searchResultsStore';
import { selectPlaceStore } from '@store/selectPlaceStore';
import { LayoutContainer } from '@styles/layouts';
import { isMobile } from '@utils/checkMobile';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const RightBox = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;
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
const HeaderWrapper = styled.div`
  gap: 20px;
  padding: 0 20px;
  display: flex;
  width: 100%;
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
const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<kakao.maps.Map>(null);
  const [searchResult] = useAtom(addressListStore);
  const [selectedPlace, setSelectedPlace] = useAtom(selectPlaceStore);
  const [isModalOpen, setIsModalOpen] = useAtom(modalStore);
  const { currentLocation, getCurrentLocation } = useGetCurrentLocation();

  const { markers, searchPlaces } = useKakaoSearch(mapRef.current);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current && mapRef.current) {
      searchPlaces(inputRef.current.value, mapRef.current.getCenter());
    }
    isMobile() && setIsModalOpen(true);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <AppScreen>
      <MainContainer>
        {searchResult && (
          <PopModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            searchResult={searchResult}
          />
        )}
        <InputHeader>
          <HeaderWrapper>
            <StyledForm onSubmit={handleSearch}>
              <Input ref={inputRef} placeholder={'지역, 지점 검색하기'} />
            </StyledForm>
          </HeaderWrapper>
        </InputHeader>
        <LayoutContainer>
          <KakaoMap
            ref={mapRef}
            selectedPlace={selectedPlace}
            setSelectedPlace={setSelectedPlace}
            currentLocation={currentLocation}
            markers={markers}
          />
        </LayoutContainer>
      </MainContainer>
    </AppScreen>
  );
};

export default Home;
