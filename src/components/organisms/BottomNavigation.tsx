import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const NavigationElement = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavigationWrapper = styled.nav`
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  position: fixed;
  height: 7rem;
  bottom: 0;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
`;

const routes = [
  {
    path: '/',
    pathname: '홈',
  },
  {
    path: '/search',
    pathname: '검색',
  },
  {
    path: '/star',
    pathname: '즐겨찾기',
  },
  {
    path: '/my-page',
    pathname: '내 정보',
  },
];

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <NavigationWrapper>
      {routes.map((route) => (
        <NavigationElement key={route.pathname}>
          <Link to={route.path}>{route.pathname}</Link>
        </NavigationElement>
      ))}
    </NavigationWrapper>
  );
};

export default BottomNavigation;
