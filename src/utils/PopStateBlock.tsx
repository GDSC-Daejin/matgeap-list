import { useEffect } from 'react';

//뒤로가기 막기

const PopStateBlock = ({ callback }: { callback: () => void }) => {
  useEffect(() => {
    window.addEventListener('popstate', callback);
    return () => window.removeEventListener('popstate', callback);
  }, []);

  return null;
};

export default PopStateBlock;
