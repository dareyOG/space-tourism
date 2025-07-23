import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTourism } from '../hooks/useTourism';

import TechnologyNav from './TechnologyNav';

import type { Technology } from '../types';

function TechnologyContent() {
  const [technology, setTechnology] = useState<Technology>();
  const [searchParams] = useSearchParams();

  const { tourism } = useTourism();
  const { technology: tech } = tourism || {};

  useEffect(() => {
    const params = searchParams.get('tech');

    const currTech = tech?.find(
      (techItem: Technology) =>
        techItem.name.toLowerCase() ===
        (params?.toLowerCase().split('-').join(' ') || 'launch vehicle')
    );

    setTechnology(currTech);
  }, [searchParams, tech, setTechnology]);

  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-1 gap-y-[3.2rem] ">
      <picture className="pt-[6.4rem] lg:pt-0 lg:py-[5rem] flex justify-end items-center lg:justify-center ">
        <source srcSet={technology?.images.landscape.substring(1)} media="(max-width:1023px)" />
        <img srcSet={technology?.images.portrait.substring(1)} alt={technology?.name} />
      </picture>

      <div className="flex lg:col-start-1 lg:row-start-1 justify-between lg:gap-x-[6.4rem]  flex-col lg:flex-row lg:justify-between lg:items-center lg:gap-y-[6.4rem] gap-y-[4rem]">
        <TechnologyNav />
        <div className="flex flex-col gap-y-[1.6rem] items-center lg:justify-center lg:items-start text-center lg:text-start">
          <div className="flex flex-col gap-y-[1.6rem] uppercase">
            <p className="text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] opacity-50">
              The terminology...
            </p>
            <h1 className="text-[2.4rem] md:text-[4rem] text-nowrap lg:text-[4.6rem]">
              {technology?.name}
            </h1>
          </div>
          <p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] text-light-blue text-center md:text-justify lg:text-start">
            {technology?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TechnologyContent;
