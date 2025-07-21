import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const destinations = ['moon', 'titan', 'mars', 'europa'];

function DestinationNav() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const currDestination = searchParams.get('destination') || destinations[0];

  return (
    <nav>
      <ul className="flex gap-x-[3.2rem] uppercase justify-center lg:justify-start items-start h-[3.2rem] text-[1.6rem] font-mono">
        {destinations.map(destination => (
          <li key={destination}>
            <NavLink
              to={`${pathname}?destination=${destination}`}
              className={({ isActive }) =>
                `pb-[.8rem] border-b-2 capitalize ${
                  isActive && currDestination === `${destination || destinations[0]}`
                    ? 'border-b-default text-default hover:border-b-transparent'
                    : 'border-transparent text-light-blue hover:text-default'
                }`
              }
            >
              {destination}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DestinationNav;
