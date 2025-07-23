import { useSearchParams } from 'react-router-dom';
import DestinationNav from './DestinationNav';
import { useEffect, useState } from 'react';
import { useTourism } from '../hooks/useTourism';
import type { Destination } from '../types';

function DestinationContent() {
  const [destination, setDestination] = useState<Destination>();
  const [searchParams] = useSearchParams();

  const { tourism, isLoading } = useTourism();
  const { destinations } = tourism || {};

  console.log(destinations);

  useEffect(() => {
    const params = searchParams.get('destination');

    const currDestination = destinations?.find(
      (destination: Destination) =>
        destination.name.toLowerCase() === (params?.toLowerCase() || 'moon')
    );
    setDestination(currDestination);
  }, [searchParams, destination, destinations]);

  console.log(destination);

  if (isLoading || !destination) {
    return <div className="text-center text-light-blue">Loading...</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-[3.2rem] w-full ">
      <figure className="flex justify-center items-center">
        <img
          src={`/assets/destinations/image-${destination?.name.toLowerCase()}.png`}
          alt={destination?.name}
          className="w-3/4 aspect-square"
        />
      </figure>
      <div className="flex flex-col gap-y-[4rem]  md:w-[51.4rem]">
        <DestinationNav />
        <div
          role="contentinfo"
          className="flex flex-col gap-y-[2.4rem] justify-center items-center lg:items-start"
        >
          <div className="flex flex-col gap-y-[1.6rem] text-light-blue justify-center items-center lg:items-start">
            <h2 className="text-[5.6rem] uppercase">{destination?.name}</h2>
            <p className="text-[1.5rem] leading-[180%] font-serif text-center lg:text-start">
              {destination?.description}
            </p>
          </div>
          <div className="h-[1px] mx-auto w-full bg-light-blue/25"></div>
          <div className="text-center flex flex-col gap-y-[2.4rem] md:flex-row md:gap-x-[2.4rem] uppercase lg:text-justify lg:pt-[2rem] ">
            <div className="">
              <p className="text-light-blue text-[1.4rem]"> Avg. distance</p>
              <p className="text-default text-[2.8rem]">{destination?.distance}</p>
            </div>
            <div className="">
              <p className="text-light-blue text-[1.4rem]">Est. travel time</p>
              <p className="text-default text-[2.8rem]">{destination?.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
