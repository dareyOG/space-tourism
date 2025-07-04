import { useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const destinations = [
  { label: 'Moon', destination: 'moon' },
  { label: 'Titan', destination: 'titan' },
  { label: 'Mars', destination: 'mars' },
  { label: 'Europa', destination: 'europa' }
];

function DestinationNav() {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('destination')) {
      searchParams.set('destination', destinations[0].destination);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  const currDestination = searchParams.get('destination');

  return (
    <nav>
      <ul className="flex gap-x-[3.2rem] uppercase justify-center items-start h-[3.2rem] text-[1.6rem]">
        {destinations.map(destination => (
          <li key={destination.destination}>
            <NavLink
              to={`${pathname}?destination=${destination.destination}`}
              className={({ isActive }) =>
                `pb-[.8rem] border-b-2 ${
                  isActive && currDestination === `${destination.destination}`
                    ? 'border-b-default text-default hover:border-b-transparent'
                    : 'border-transparent text-light-blue hover:text-default'
                }`
              }
            >
              {destination.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DestinationNav;
