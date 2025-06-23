import { useParams } from 'react-router-dom';

type Crew = 'commander' | 'engineer' | 'pilot' | 'specialist';

function Crew() {
  const role = useParams<{ role: Crew }>();
  console.log(role);

  // fetch crew data
  return (
    <section className="absolute top-0 left-0 right-0 z-0 bg-bg-crew md:bg-bg-crew_tablet lg:bg-bg-crew_desktop bg-top bg-cover bg-no-repeat sm:p-[2.4rem] lg:px-0 h-screen border-2 border-solid border-[#aac234] grid grid-cols-1"></section>
  );
}

export default Crew;
