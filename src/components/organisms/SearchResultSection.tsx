import React from 'react';

import { useAtom } from 'jotai';
import styled from 'styled-components';

import { ResultPlaceCard } from '@molecules/PlaceCard';
import { modalStore } from '@store/modalStore';
import { selectPlaceStore } from '@store/selectPlaceStore';
import { Address } from '@type/address';

type Props = {
  searchResult: Address[];
};

const SectionContainer = styled.section`
  height: calc(100vh - 100px);
  overflow: scroll;
  width: 100%;
`;

const SearchResultSection = ({ searchResult }: Props) => {
  const [, setSelectedPlace] = useAtom(selectPlaceStore);
  const [, setModalOpen] = useAtom(modalStore);

  const handlePlaceClick = (place: Address) => {
    setSelectedPlace(place);
    setModalOpen(false);
  };

  return (
    <SectionContainer>
      {searchResult &&
        searchResult.map((place) => (
          <ResultPlaceCard
            key={place.id}
            place={place}
            handlePlaceClick={handlePlaceClick}
          />
        ))}
    </SectionContainer>
  );
};

export default SearchResultSection;
