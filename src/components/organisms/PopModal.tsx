import { useScrollBlock } from '@hooks/useScrollBlock';
import SearchResultSection from '@organisms/SearchResultSection';
import { Address } from '@type/address';
import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PopModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 2px);
  position: fixed;
  z-index: 100;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  background: ${({ theme }) => theme.colors.white};
`;
const PopModalInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0 0 0;
  height: calc(100vh - 20rem);
`;
const ModalHandle = styled.div`
  display: flex;
  width: 80px;
  height: 6px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.blue600};
`;

const modalVariants = {
  closed: {
    y: '100%',
  },
  visible: {
    y: 0,
  },
};

type TouchEvent = {
  touchStartY: number;
  touchEndY: number;
  isTouched: boolean;
};

const PopModal = ({
  isModalOpen,
  setIsModalOpen,
  searchResult,
}: {
  isModalOpen: boolean;
  setIsModalOpen: (test: boolean) => void;
  searchResult: Address[];
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const touchStart = useRef<TouchEvent>({
    touchStartY: 0,
    touchEndY: 0,
    isTouched: false,
  });
  const [, setScrollBlock] = useScrollBlock();

  useEffect(() => {
    if (!isModalOpen) return;
    if (!modalRef.current) return;
    modalRef.current.addEventListener('touchstart', (event) => {
      if (touchStart.current.isTouched) return;
      touchStart.current = {
        ...touchStart.current,
        touchStartY: event.touches[0].clientY,
        isTouched: true,
      };
      setScrollBlock(true);
    });
    modalRef.current.addEventListener('touchmove', (event) => {
      if (!touchStart.current.isTouched) return;
      const upY = event.touches[0].clientY;
      touchStart.current = {
        ...touchStart.current,
        touchEndY: upY - touchStart.current.touchStartY,
      };
      console.log(touchStart.current.touchStartY);
      if (
        touchStart.current.touchStartY < 300 &&
        touchStart.current.touchEndY > 120
      ) {
        setIsModalOpen(false);
      }
    });
    modalRef.current.addEventListener('touchend', (event) => {
      touchStart.current = {
        touchStartY: 0,
        touchEndY: 0,
        isTouched: false,
      };
      setScrollBlock(false);
    });

    return () => {
      if (!modalRef.current) return;
      modalRef.current.removeEventListener('touchstart', () => {});
      modalRef.current.removeEventListener('touchmove', () => {});
      modalRef.current.removeEventListener('touchend', () => {});
    };
  }, [modalRef, isModalOpen]);

  return (
    <PopModalWrapper
      ref={modalRef}
      variants={modalVariants}
      initial="closed"
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      animate={isModalOpen ? 'visible' : 'closed'}
    >
      <PopModalInner>
        <ModalHandle />
        <SearchResultSection searchResult={searchResult} />
      </PopModalInner>
    </PopModalWrapper>
  );
};

export default PopModal;
