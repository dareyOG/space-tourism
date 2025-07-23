import { useSearchParams } from 'react-router-dom';
import CrewNav from './CrewNav';
import { useTourism } from '../hooks/useTourism';
import { useEffect, useState } from 'react';
import type { Crew } from '../types';

function CrewContent() {
  const [crewMember, setCrewMember] = useState<Crew>();
  const [searchParams] = useSearchParams();

  const { tourism } = useTourism();
  const { crew } = tourism || {};

  console.log(crew);

  useEffect(() => {
    const params = searchParams.get('crew');

    const currentMember = crew?.find(
      (member: Crew) =>
        member.name.toLowerCase() ===
        (params?.toLowerCase().split('-').join(' ') || 'douglas hurley')
    );
    setCrewMember(currentMember);
  }, [searchParams, crew, setCrewMember]);

  console.log(crewMember);

  return (
    <div className="grid lg:grid-cols-2 lg:gap-y-[3.2rem] ">
      <div
        role="contentinfo"
        className="flex flex-col justify-between gap-y-[2.4rem] lg:gap-y-[4rem] "
      >
        <div className="flex flex-col justify-center h-full py-[2.4rem] gap-y-[2.4rem] text-light-blue">
          <div role="columnheader" className="flex flex-col gap-y-[.8rem] uppercase text-default">
            <p className="text-[1.8rem] lg:text-[3.2rem] opacity-50">{crewMember?.role}</p>
            <h1 className="text-[2.4rem] lg:text-[5.6rem]">{crewMember?.name}</h1>
          </div>
          <p className="text-[1.5rem] lg:text-[1.8rem]">{crewMember?.bio}</p>
        </div>
        <CrewNav />
      </div>
      <figure className="  flex place-content-center ">
        <img src={`${crewMember?.images.png.substring(1)}`} alt={crewMember?.name} />
      </figure>
    </div>
  );
}

export default CrewContent;
