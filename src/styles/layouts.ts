import styled from 'styled-components';

export const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: calc(100vh - 70px);
  max-height: -moz-calc(100vh - 70px);
  max-height: -webkit-calc(100vh - 70px);
  overflow: scroll;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  flex: 1;
`;
export const ContainerInner = styled.div`
  width: 100%;
  height: 100%;
  max-width: calc(100% - 40px);
  margin: 0 auto;
  padding: 0 10px;
`;
