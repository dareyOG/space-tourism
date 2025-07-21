import { useSearchParams } from 'react-router-dom';
import CrewNav from './CrewNav';
import { useTourism } from '../hooks/useTourism';
import { useEffect, useState } from 'react';
import type { Crew } from '../types';

function CrewContent() {
  const [crewMember, setCrewMember] = useState<Crew>();
  const [searchParams] = useSearchParams();

  const tourism = useTourism();
  const crew = tourism?.crew;

  useEffect(() => {
    const params = searchParams.get('crew');

    const currentMember = crew?.find(
      member =>
        member.name.toLowerCase() ===
        (params?.toLowerCase().split('-').join(' ') || 'douglas hurley')
    );
    setCrewMember(currentMember);
  }, [searchParams, crew, setCrewMember]);

  return (
    <div
      role="contentinfo"
      className="flex flex-col lg:flex-row lg:justify-between gap-y-[3.2rem] border border-default"
    >
      <div className="pt-[4rem] w-1/2 flex flex-col justify-between items-center text-center gap-y-[2.4rem] border border-default">
        <div className="flex flex-col py-[2.4rem] gap-y-[2.4rem] text-light-blue">
          <div role="columnheader" className="flex flex-col gap-y-[.8rem] uppercase text-default">
            <p className="text-[1.8rem] opacity-50">{crewMember?.role}</p>
            <h1 className="text-[2.4rem]">{crewMember?.name}</h1>
          </div>
          <p className="text-[1.5rem]">{crewMember?.bio}</p>
        </div>
        <CrewNav />
      </div>
      <figure className="flex place-content-center border border-default">
        <img src={`${crewMember?.images.png.substring(1)}`} alt={crewMember?.name} />
      </figure>
    </div>
  );
}

export default CrewContent;
