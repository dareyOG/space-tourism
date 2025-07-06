import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// const crew = [
//   { name: 'Douglas Hurley' },
//   { name: 'Mark Shuttleworth' },
//   { name: 'Victor Glover' },
//   { name: 'Anousheh Ansari' }
// ];
const crew = ['Douglas Hurley', 'Mark Shuttleworth', 'Victor Glover', 'Anousheh Ansari'];

function CrewNav() {
  //   const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('crew')) {
      searchParams.set('crew', crew[0].split(' ').join('-').toLowerCase());
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const currCrew = searchParams.get('crew');

  console.log(currCrew);

  return (
    <nav>
      <ul className="flex gap-x-[1.6rem] justify-center items-start">
        {crew.map(crew => (
          <li key={crew}>
            <button
              onClick={() => {
                searchParams.set('crew', crew.split(' ').join('-').toLowerCase());
                setSearchParams(searchParams);
              }}
              className={`w-[1.4rem] aspect-square rounded-full ${
                currCrew?.split('-').join(' ') === `${crew.toLowerCase()}`
                  ? 'bg-default hover:bg-dark-blue/50'
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
