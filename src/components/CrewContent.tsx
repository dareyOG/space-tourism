import { useSearchParams } from 'react-router-dom';
import CrewNav from './CrewNav';
import { useTourism } from '../hooks/useTourism';

function CrewContent() {
  const [searchParams] = useSearchParams();
  const { crew } = useTourism();

  const params = searchParams.get('crew');

  const crewMember = crew.find(
    member => member.name.toLowerCase() === params?.toLowerCase().split('-').join(' ')
  );

  return (
    <div role="contentinfo" className="flex flex-col gap-y-[3.2rem] border border-default">
      <div className="pt-[4rem] flex flex-col items-center text-center gap-y-[2.4rem] border border-default">
        <div className="flex flex-col  gap-y-[2.4rem] text-light-blue">
          <div role="columnheader" className="flex flex-col gap-y-[.8rem] uppercase text-default">
            <p className="text-[1.8rem] opacity-50">{crewMember?.role}</p>
            <h1 className="text-[2.4rem]">{crewMember?.name}</h1>
          </div>
          <p className="text-[1.5rem]">{crewMember?.bio}</p>
        </div>
        <CrewNav />
      </div>
      <figure className="flex place-content-center border border-default">
        <img
          src={`/assets/crew/image-${params?.toLowerCase().split(' ').join('-')}.png`}
          alt={crewMember?.name}
        />
      </figure>
    </div>
  );
}

export default CrewContent;
