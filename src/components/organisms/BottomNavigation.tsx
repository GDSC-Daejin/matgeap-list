import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import styled from 'styled-components';

import account from '@assets/account.svg';
import home from '@assets/home.svg';
import magnify from '@assets/magnify.svg';
import star from '@assets/star.svg';

const NavigationElement = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavigationElementLogo = styled(Link)<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grey900};
  font-size: 10px;
  & > img {
    align-self: center;
    height: 30px;
    transition: all 0.4s;
    filter: ${({ isActive }) =>
      isActive
        ? 'invert(100%) sepia(0%) saturate(7453%) hue-rotate(94deg) brightness(110%) contrast(109%);'
        : ''};
  }
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
  border-top: 1px solid ${({ theme }) => theme.colors.grey300};
  background: ${({ theme }) => theme.colors.white};
`;
const SelectRouteCircle = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.blue600};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  z-index: -1;
`;

const routes = [
  {
    path: '/',
    pathname: '홈',
    icon: home,
  },
  {
    path: '/search',
    pathname: '검색',
    icon: magnify,
  },
  {
    path: '/star',
    pathname: '저장',
    icon: star,
  },
  {
    path: '/my-page',
    pathname: '내 정보',
    icon: account,
  },
];

const BottomNavigation = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <LayoutGroup>
        <NavigationWrapper>
          {routes.map((route) => {
            return (
              <NavigationElement key={route.pathname}>
                <NavigationElementLogo
                  to={route.path}
                  isActive={location.pathname == route.path}
                >
                  <img src={route.icon} alt={'icon'} />
                </NavigationElementLogo>
                {location.pathname === route.path && (
                  <SelectRouteCircle layoutId={'circle'} />
                )}
              </NavigationElement>
            );
          })}
        </NavigationWrapper>
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default BottomNavigation;
