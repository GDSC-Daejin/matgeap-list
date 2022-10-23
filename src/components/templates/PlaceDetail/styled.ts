import styled from 'styled-components';

export const Blockquote = styled.blockquote`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.blue100};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blue600};
  min-height: 8rem;
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.blue900};
  font-weight: 600;
  word-break: keep-all;
  text-align: center;
  padding: 10px 40px;
  position: relative;
  &:before {
    content: '“';
    font-size: 4rem;
    position: absolute;
    left: 20px;
    top: 10px;
    color: ${({ theme }) => theme.colors.blue900};
  }
  &:after {
    content: '”';
    font-size: 4rem;
    position: absolute;
    right: 20px;
    bottom: -10px;
    color: ${({ theme }) => theme.colors.blue900};
  }
`;
export const 등록한사람 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const 등록한사람이름 = styled.strong`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const 가게이름 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.titleS};
  color: ${({ theme }) => theme.colors.grey900};
  font-weight: 700;
`;
export const 주소 = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.grey700};
`;
export const 가게정보Wrapper = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.textXxl};
  color: ${({ theme }) => theme.colors.grey900};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;
export const Category = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  color: ${({ theme }) => theme.colors.grey900};
`;
export const 가게정보카테고리Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
`;
export const 가게정보Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const 카카오맵으로이동 = styled.a`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.textM};
  color: ${({ theme }) => theme.colors.blue600};
  gap: 10px;
`;
export const PlaceDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.background};
`;
export const PlaceDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const 추후출시 = styled.div`
  width: 100%;
  text-align: center;
  align-self: center;
  height: 300px;
  font-size: ${({ theme }) => theme.fontSizes.textXl};
  color: ${({ theme }) => theme.colors.grey600};
  font-weight: 500;
`;
export const Phone = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.textS};
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.blue900};
`;
export const MapWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
`;
