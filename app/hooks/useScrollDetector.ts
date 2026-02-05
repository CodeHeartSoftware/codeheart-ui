import { useEffect, useState } from 'react';

const useScrollDetector = () => {
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than 90
      setIsAtTop(window.scrollY <= 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isAtTop };
};

export default useScrollDetector;
