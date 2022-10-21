import Button from '@atoms/Button';
import { Input } from '@gdsc-dju/styled-components';
import { useGetCurrentLocation } from '@hooks/useGetCurrentLocation';
import { useKakaoSearch } from '@hooks/useKakaoSearch';
import KakaoMap from '@molecules/KakaoMap';
import PopModal from '@organisms/PopModal';
import SearchResultSection from '@organisms/SearchResultSection';
import { modalStore } from '@store/modalStore';
import { addressListStore } from '@store/searchResultsStore';
import { selectLocationStore } from '@store/selectLocationStore';
import { useAtom } from 'jotai';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

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
  flex: 2;
`;
const LeftBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 400px;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 500px) {
    flex: 0;
    width: 100%;
    padding: 0;
  }
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
  padding: 10px 0;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;
const Home = () => {
  const [search, setSearch] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchResult] = useAtom(addressListStore);
  const [selectedPlace, setSelectedPlace] = useAtom(selectLocationStore);
  const [isModalOpen, setIsModalOpen] = useAtom(modalStore);
  const { markers, extendBounds } = useKakaoSearch(search);

  const { currentLocation, getCurrentLocation } = useGetCurrentLocation();
  const isMobile = window.innerWidth < 500;

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      setSearch(inputRef.current.value);
    }
    isMobile && setIsModalOpen(true);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <MainContainer>
      {searchResult && (
        <PopModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          searchResult={searchResult}
        />
      )}
      <LeftBox>
        <StyledForm onSubmit={handleSearch}>
          <Input ref={inputRef} />
          <Button type={'submit'}>검색</Button>
          <button>로그인</button>
        </StyledForm>
        {!isMobile && searchResult && (
          <SearchResultSection searchResult={searchResult} />
        )}
      </LeftBox>
      <RightBox>
        <KakaoMap
          search={search}
          selectedPlace={selectedPlace}
          setSelectedPlace={setSelectedPlace}
          currentLocation={currentLocation}
          markers={markers}
          extendBounds={extendBounds}
        />
      </RightBox>
    </MainContainer>
  );
};

export default Home;
