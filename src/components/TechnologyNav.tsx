import { useSearchParams } from 'react-router-dom';

const technology = ['Launch vehicle', 'Spaceport', 'Space capsule'];

function TechnologyNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currTech = searchParams.get('tech') || technology[0];
  console.log(currTech);

  return (
    <nav className="">
      <ul className="flex lg:flex-col gap-x-[1.6rem] lg:gap-y-[3.2rem] justify-center">
        {technology.map((tech, index) => (
          <button
            key={tech}
            onClick={() => {
              searchParams.set('tech', tech.split(' ').join('-').toLowerCase());

              setSearchParams(searchParams);
            }}
            className={`w-[4rem] md:w-[5.6rem] lg:w-[8rem] aspect-square text-[1.8rem] md:text-[2.4rem] lg:text-[3.2rem] border-[.1rem] border-solid rounded-full ${
              currTech.split('-').join(' ').toLowerCase() ===
              (tech?.toLowerCase() || technology[0].toLowerCase().split(' ').join('-'))
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
