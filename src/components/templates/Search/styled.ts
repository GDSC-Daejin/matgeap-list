import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  box-sizing: border-box;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 500px) {
    margin-bottom: 0;
  }
`;
export const SearchPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 10px;
`;
export const ResultCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey900};
`;
