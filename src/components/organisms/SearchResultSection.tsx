import PlaceResultCard from '@molecules/PlaceResultCard';
import { modalStore } from '@store/modalStore';
import { selectLocationStore } from '@store/selectLocationStore';
import { Address } from '@type/address';
import { useAtom } from 'jotai';
import React from 'react';
import styled from 'styled-components';

interface SearchResultSectionProps {
  searchResult: Address[];
}

const SectionContainer = styled.section`
  height: calc(100vh - 100px);
  overflow: scroll;
  width: 100%;
`;

const SearchResultSection = ({ searchResult }: SearchResultSectionProps) => {
  const [selectedPlace, setSelectedPlace] = useAtom(selectLocationStore);
  const [modalOpen, setModalOpen] = useAtom(modalStore);

  const handlePlaceClick = (place: Address) => {
    setSelectedPlace(place);
    setModalOpen(false);
  };
  return (
    <SectionContainer>
      {searchResult &&
        searchResult.map((place) => (
          <PlaceResultCard
            key={place.id}
            place={place}
            handlePlaceClick={handlePlaceClick}
          />
        ))}
    </SectionContainer>
  );
};

export default SearchResultSection;
