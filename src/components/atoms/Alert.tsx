import React, { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import styled, { css } from 'styled-components';

import { ColorToken } from '@gdsc-dju/styled-components-theme';
import { alertStore } from '@store/alertStore';

export const AlertInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  opacity: 80%;
  z-index: 3;
`;
export const AlertText = styled.div<{ alertColor: ColorToken }>`
  font-size: ${({ theme }) => theme.fontSizes.textL};
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey900};
  ${({ alertColor }) =>
    alertColor &&
    css`
      color: ${({ theme }) => theme.colors[alertColor]};
    `};
`;
export const AlertInner = styled(motion.div)`
  position: fixed;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  box-shadow: 0 0 4px 0 ${({ theme }) => theme.colors.blue300};
  padding: 10px 16px;
  top: 20px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  & :hover {
    cursor: default;
  }
`;
export const AlertWrapper = styled(motion.div)`
  position: fixed;
  top: 100px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const variants = {
  active: {
    opacity: 1,
    scale: 1,
  },
  unActive: {
    opacity: 0,
    scale: 0.5,
  },
};
const ALERT_STATUS_COLOR = {
  SUCCESS: 'green900',
  ERROR: 'red900',
  WARNING: 'orange900',
} as const;

const Alert = () => {
  const [alert, setAlert] = useAtom(alertStore);

  useEffect(() => {
    if (!alert.isActive) return;
    const alertTimer = setTimeout(() => {
      setAlert({
        ...alert,
        isActive: false,
      });
      clearTimeout(alertTimer);
    }, 4000);
    return () => clearTimeout(alertTimer);
  }, [alert]);

  return (
    <AnimatePresence>
      {alert.isActive && (
        <AlertWrapper>
          <AlertInner
            variants={variants}
            exit={'unActive'}
            animate={'active'}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AlertInnerWrapper>
              <AlertText alertColor={ALERT_STATUS_COLOR[alert.status]}>
                {alert.message}
              </AlertText>
            </AlertInnerWrapper>
          </AlertInner>
        </AlertWrapper>
      )}
    </AnimatePresence>
  );
};

export default Alert;
