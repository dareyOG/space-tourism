import DestinationNav from './DestinationNav';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

interface Destination {
  description: string;
  distance: string;
  name: string;
  travel: string;
}

function DestinationContent() {
  const [destinations, setDestinations] = useState<Destination[]>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  useEffect(() => {
    const destination = async function () {
      const res = await fetch('/data/data.json');
      const { destinations } = await res.json();
      setDestinations(destinations);
    };
    destination();
  }, []);
  console.log(pathname.split('/'));

  const destination = destinations?.find(
    destination => pathname.split('/').slice(-1)[0] === destination.name.toLowerCase()
  ) as Destination;

  console.log(destination);

  return (
    <div className="flex flex-col gap-y-[3.2rem]">
      <div className="w-auto mx-auto">
        <img
          src={`/assets/destinations/image-${destination?.name.toLowerCase()}.png`}
          alt={destination?.name}
          width={'150'}
          height={'150'}
        />
      </div>
      <div className="flex flex-col gap-y-[2.4rem] divide-y divide-solid divide-light-blue divide-opacity-25">
        <div>
          <DestinationNav />
          {/* <Outlet /> */}

          <div className="flex flex-col gap-y-[1.6rem] text-light-blue justify-center items-center">
            <h2 className="text-[5.6rem] uppercase">{destination?.name}</h2>
            <p className="text-[1.5rem] leading-[180%] font-serif text-center">
              {destination?.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[2.4rem] uppercase items-center justify-center text-center">
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
  );
}

export default DestinationContent;
