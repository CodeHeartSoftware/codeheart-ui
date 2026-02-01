import { useEffect, useState } from 'react';

const useScrollDetector = () => {
  const [isNotTop, setIsNotTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than 0
      setIsNotTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isNotTop };
};

export default useScrollDetector;
