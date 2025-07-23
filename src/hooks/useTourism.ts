// import { useEffect, useState } from 'react';
// import type { Tourism } from '../types';
import useSWR from 'swr';

export const useTourism = () => {
  const fetcher = () => fetch('/data/data.json').then(res => res.json());

  const { data: tourism } = useSWR('/data/data.json', fetcher);

  // if (!tourism) {
  //   return { tourism: null, isLoading: true };
  // }
  return { tourism };
};
