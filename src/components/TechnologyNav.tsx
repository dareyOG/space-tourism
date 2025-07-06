import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const technology = [{ name: 'Launch vehicle' }, { name: 'Spaceport' }, { name: 'Space capsule' }];

function TechnologyNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('tech')) {
      searchParams.set('tech', technology[0].name.split(' ').join('-').toLowerCase());
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const currTech = searchParams.get('tech');

  return (
    <nav className="">
      <ul className="flex lg:flex-col gap-x-[1.6rem] lg:gap-y-[3.2rem] justify-center">
        {technology.map((tech, index) => (
          <button
            key={tech.name}
            onClick={() => {
              searchParams.set('tech', tech.name.split(' ').join('-').toLowerCase());
              setSearchParams(searchParams);
            }}
            className={`w-[4rem] md:w-[5.6rem] lg:w-[8rem] aspect-square text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] border-[.1rem] border-solid rounded-full ${
              currTech?.split('-').join(' ') === tech.name.toLowerCase()
                ? 'text-dark-blue border-transparent bg-default'
                : ' border-light-blue bg-transparent text-default hover:text-dark-blue hover:bg-default '
            }`}
          >
            {index + 1}
          </button>
        ))}
      </ul>
    </nav>
  );
}

export default TechnologyNav;
