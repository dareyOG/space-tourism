import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const crew = [
  { name: 'Douglas Hurley' },
  { name: 'Mark Shuttleworth' },
  { name: 'Victor Glover' },
  { name: 'Anousheh Ansari' }
];

function CrewNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('crew')) {
      searchParams.set('crew', crew[0].name.split(' ').join('-').toLowerCase());
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const currCrew = searchParams.get('crew')?.split('-').join(' ').toLowerCase();

  return (
    <nav>
      <ul className="flex gap-x-[1.6rem] justify-center items-start">
        {crew.map(crew => (
          <li key={crew.name}>
            <button
              onClick={() => {
                searchParams.set('crew', crew.name.split(' ').join('-').toLowerCase());
                setSearchParams(searchParams);
              }}
              className={`w-[1.4rem] aspect-square rounded-full ${
                currCrew === `${crew.name.toLowerCase()}`
                  ? 'bg-default hover:bg-light-blue/50'
                  : 'bg-light-blue/50 hover:bg-default'
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewNav;
