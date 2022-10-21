import { useEffect } from 'react';

//뒤로가기 막기

const PopStateBlock = () => {
  useEffect(() => {
    const preventGoBack = () => {
      history.go(1);
    };

    history.pushState(null, '', location.href);
    window.addEventListener('popstate', preventGoBack);
    return () => window.removeEventListener('popstate', preventGoBack);
  }, []);

  return null;
};

export default PopStateBlock;
