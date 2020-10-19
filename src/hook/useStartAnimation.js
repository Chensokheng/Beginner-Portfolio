import { useEffect, useState } from 'react';

export default function useStartAnimation() {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    setAnimated(true);
  }, []);
  return animated;
}
