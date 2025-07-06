import { useSearchParams } from 'react-router-dom';
import DestinationNav from './DestinationNav';
import { useTourism } from '../hooks/useTourism';

function DestinationContent() {
  const [searchParams] = useSearchParams();
  const { destinations } = useTourism();

  const params = searchParams.get('destination');

  const destination = destinations.find(
    destination => destination.name.toLowerCase() === params?.toLowerCase()
  );

  return (
    <div className="grid lg:grid-cols-2 gap-[3.2rem] ">
      <figure className="m-auto place-items-center">
        <img
          src={`/assets/destinations/image-${destination?.name.toLowerCase()}.png`}
          alt={destination?.name}
          className="w-3/4 aspect-square "
        />
      </figure>
      <div className="flex flex-col gap-y-[4rem]">
        <DestinationNav />
        <div
          role="contentinfo"
          className="flex flex-col gap-y-[2.4rem] justify-center items-center"
        >
          <div className="flex flex-col gap-y-[1.6rem] text-light-blue justify-center items-center lg:items-start">
            <h2 className="text-[5.6rem] uppercase">{destination?.name}</h2>
            <p className="text-[1.5rem] leading-[180%] font-serif text-center">
              {destination?.description}
            </p>
          </div>
          <div className="h-[1px] mx-auto w-full bg-light-blue/25"></div>
          <div className="text-center flex flex-col lg:flex-row lg:gap-x-[2.4rem] uppercase lg:text-justify lg:pt-[2rem] ">
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
