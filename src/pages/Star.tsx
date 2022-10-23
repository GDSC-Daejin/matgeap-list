import React from 'react';

import styled from 'styled-components';

const 알림 = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.grey500};
`;

const Star = () => {
  return (
    <div>
      <알림>즐겨찾기는 추후 추가될 예정이에요</알림>
    </div>
  );
};

export default Star;
