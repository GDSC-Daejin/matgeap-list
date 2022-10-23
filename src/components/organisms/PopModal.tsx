import React, { useRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useScrollBlock } from '@hooks/useScrollBlock';
import SearchResultSection from '@organisms/SearchResultSection';
import { Address } from '@type/address';

const PopModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2px);
  position: absolute;
  z-index: 20;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  height: calc(100vh - 70px);
  background: ${({ theme }) => theme.colors.background};
`;
const PopModalInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: calc(100vh - 17rem);
  box-sizing: border-box;
  padding: 6px 20px 0 20px;
`;
const ModalHandle = styled.div`
  display: flex;
  width: 80px;
  height: 8px;
  margin-top: 6px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
`;

const modalVariants = {
  initial: {
    y: window.innerHeight - 90,
  },
  closed: {
    y: window.innerHeight - 90,
  },
  visible: {
    y: 100,
    zIndex: 100,
  },
};

type TouchEvent = {
  touchStartY: number;
  touchEndY: number;
  isTouched: boolean;
};
type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (test: boolean) => void;
  searchResult: Address[] | null;
};

const PopModal = ({ isModalOpen, setIsModalOpen, searchResult }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const touchStart = useRef<TouchEvent>({
    touchStartY: 0,
    touchEndY: 0,
    isTouched: false,
  });
  const [, setScrollBlock] = useScrollBlock();

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = {
      ...touchStart.current,
      touchStartY: e.touches[0].clientY,
      isTouched: true,
    };
    setScrollBlock(true);
  };
  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const upY = e.touches[0].clientY;
    touchStart.current = {
      ...touchStart.current,
      touchEndY: upY - touchStart.current.touchStartY,
    };
    if (touchStart.current.touchEndY - touchStart.current.touchStartY > 60) {
      setIsModalOpen(false);
    }
    if (touchStart.current.touchEndY - touchStart.current.touchStartY < 60) {
      setIsModalOpen(true);
    }
  };
  const touchEndHandler = () => {
    touchStart.current = {
      ...touchStart.current,
      isTouched: false,
    };
    setScrollBlock(false);
  };

  return (
    <PopModalWrapper
      ref={modalRef}
      variants={modalVariants}
      initial={'initial'}
      transition={{ type: 'spring', damping: 40, stiffness: 300 }}
      animate={isModalOpen ? 'visible' : 'closed'}
    >
      <PopModalInner>
        <ModalHandle
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
        />
        {searchResult && <SearchResultSection searchResult={searchResult} />}
      </PopModalInner>
    </PopModalWrapper>
  );
};

export default PopModal;
