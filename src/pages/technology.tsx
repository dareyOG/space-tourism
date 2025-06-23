import { useParams } from 'react-router-dom';

type Technology = 'capsule' | 'spaceport' | 'vehicle';

function Technology() {
  const x = useParams<{ name: Technology }>();
  console.log(x.name);

  // fetch technoogy data from params

  return (
    <section className="absolute top-0 left-0 right-0 z-0 bg-bg-technology md:bg-bg-technology_tablet lg:bg-bg-technology_desktop bg-top bg-cover bg-no-repeat sm:p-[2.4rem] lg:px-0 h-screen border-2 border-solid border-[#aac234] grid grid-cols-1"></section>
  );
}

export default Technology;
