import useSWR from 'swr';

export const useTourism = () => {
  const fetcher = () => fetch('/data/data.json').then(res => res.json());

  const { data: tourism } = useSWR('/data/data.json', fetcher);

  return { tourism };
};
