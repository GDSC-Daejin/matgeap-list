import styled from 'styled-components';

export const MyProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
export const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const MyPageUserName = styled.h1`
  color: ${({ theme }) => theme.colors.grey900};
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
`;
export const MyPageUserData = styled.span`
  color: ${({ theme }) => theme.colors.grey600};
  font-size: ${({ theme }) => theme.fontSizes.textM};
`;

export const MyPageContainerInner = styled.div`
  margin-top: 4rem;
`;
export const MyPageTitle = styled.h2`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  font-weight: 600;
`;
export const LogoutButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  color: ${({ theme }) => theme.colors.grey600};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey600};
  padding: 6px 10px;
  border-radius: 10px;
`;
