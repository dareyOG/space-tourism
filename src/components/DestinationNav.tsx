import { NavLink, useLocation } from 'react-router-dom';

function DestinationNav() {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul className="flex gap-x-[3.2rem] uppercase justify-center items-start h-[3.2rem] text-[1.6rem]">
        <li>
          <NavLink
            to={'moon'}
            className={({ isActive }) =>
              `pb-[.8rem] border-b-2 ${
                isActive || pathname === '/destination'
                  ? 'border-b-default text-default hover:border-b-transparent'
                  : 'border-transparent text-light-blue hover:text-default'
              }`
            }
          >
            moon
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'mars'}
            className={({ isActive }) =>
              `pb-[.8rem] border-b-2  ${
                isActive
                  ? 'border-b-default text-default hover:border-b-transparent'
                  : 'border-transparent text-light-blue hover:text-default'
              }`
            }
          >
            mars
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'europa'}
            className={({ isActive }) =>
              `pb-[.8rem] border-b-2  ${
                isActive
                  ? 'border-b-default text-default hover:border-b-transparent'
                  : 'border-transparent text-light-blue hover:text-default'
              }`
            }
          >
            europa
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'titan'}
            className={({ isActive }) =>
              `pb-[.8rem] border-b-2  ${
                isActive
                  ? 'border-b-default text-default hover:border-b-transparent'
                  : 'border-transparent text-light-blue hover:text-default'
              }`
            }
          >
            titan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default DestinationNav;
