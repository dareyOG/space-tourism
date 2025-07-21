import { useEffect, useState } from 'react';
import type { Tourism } from '../types';

export const useTourism = () => {
  const [tourism, setTourism] = useState<Tourism>();

  useEffect(() => {
    const fetchTourism = async function () {
      const res = await fetch('/data/data.json');
      const data = await res.json();

      setTourism(data);
    };
    fetchTourism();
  }, []);

  return tourism;
};
