import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  gap: 20px;
  display: flex;
  width: 100%;
  flex-direction: row;
  box-sizing: border-box;
  margin-bottom: 30px;
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
`;
export const ResultCount = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey900};
`;
export const CountButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey900};
  background: ${({ theme }) => theme.colors.background};
  border: none;
  color: ${({ theme }) => theme.colors.blue900};
`;
