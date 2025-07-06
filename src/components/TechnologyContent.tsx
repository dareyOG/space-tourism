import { useSearchParams } from 'react-router-dom';
import { useTourism } from '../hooks/useTourism';

import TechnologyNav from './TechnologyNav';

function TechnologyContent() {
  const [searchParams] = useSearchParams();
  const { technology } = useTourism();

  const params = searchParams.get('tech');

  const tech = technology.find(
    t => t.name.toLowerCase() === params?.toLowerCase().split('-').join(' ')
  );

  return (
    <div className="flex flex-col justify-end items-center gap-y-[3.2rem]">
      <div className="flex flex-col gap-y-[3.2rem] border border-red-500">
        <picture className="pt-[6.4rem] lg:pt-0 lg:py-[5rem] flex justify-end items-center border border-default col-start-2 col-end-3">
          <source
            srcSet={`/assets/technology/image-${params}-landscape.jpg`}
            media="(max-width:1023px)"
          />
          <img
            srcSet={`/assets/technology/image-${params}-portrait.jpg`}
            alt={tech?.name}
            className="w-full"
          />
        </picture>

        <div role="contentinfo" className="flex flex-col gap-y-[4rem] border border-default">
          <TechnologyNav />
          <div className="flex flex-col gap-y-[1.6rem] items-center lg:items-start text-center lg:text-start">
            <div className="flex flex-col gap-y-[1.6rem] uppercase">
              <p className="text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] opacity-50">
                The terminology...
              </p>
              <h1 className="text-[2.4rem] md:text-[4rem] lg:text-[5.6rem]">{tech?.name}</h1>
            </div>
            <p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] text-light-blue text-center md:text-balance lg:text-start">
              {tech?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyContent;
