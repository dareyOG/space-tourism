import { useEffect, useState } from 'react';

type Destination = {
  description: string;
  distance: string;
  name: string;
  travel: string;
};

type Crew = {
  bio: string;
  name: string;
  role: string;
  images: {
    png: string;
    webp: string;
  };
};

type Technology = {
  description: string;
  images: {
    portrait: string;
    landscape: string;
  };
  name: string;
};

export const useTourism = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [crew, setCrew] = useState<Crew[]>([]);
  const [technology, setTechnology] = useState<Technology[]>([]);

  useEffect(() => {
    const fetchTourism = async function () {
      const res = await fetch('/data/data.json');
      const { destinations, crew, technology } = await res.json();
      setDestinations(destinations);
      setCrew(crew);
      setTechnology(technology);
    };
    fetchTourism();
  }, []);

  return { destinations, crew, technology };
};
