import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="hidden md:flex md:items-center">
      <div className="hidden lg:flex h-[1px] w-[56rem] items-center bg-default opacity-25 relative top-0 left-10 z-10"></div>
      <ul className="bg-default/5 opacity-100 backdrop-blur-lg flex md:justify-end lg:justify-between items-center gap-[3.2rem] md:gap-[4.8rem] text-[1.6rem] font-mono uppercase text-white gap-x-[2rem] px-[2.4rem] md:px-[4rem] lg:px-[6.4rem] border-2 border-transparent">
        <li>
          <NavLink
            to={'home'}
            className={({ isActive }) =>
              `flex items-center border-b-2 justify-between md:h-[10rem] lg:h-[9.6rem] md:gap-x-[1.2rem] ${
                isActive ? 'border-default' : 'border-transparent hover:text-dark-blue'
              }`
            }
          >
            <span className="font-bold">00</span>
            <span>home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'destination'}
            className={({ isActive }) =>
              `flex items-center border-b-2 justify-between md:h-[10rem] lg:h-[9.6rem] md:gap-x-[1.2rem] ${
                isActive ? 'border-default' : 'border-transparent hover:text-dark-blue'
              }`
            }
          >
            <span className="font-bold">01</span>
            <span>destination</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'crew'}
            className={({ isActive }) =>
              `flex items-center border-b-2 justify-between md:h-[10rem] lg:h-[9.6rem] md:gap-x-[1.2rem] ${
                isActive ? 'border-default' : 'border-transparent hover:text-dark-blue'
              }`
            }
          >
            <span className="font-bold">02</span>
            <span>crew</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'technology'}
            className={({ isActive }) =>
              `flex items-center border-b-2 justify-between md:h-[10rem] lg:h-[9.6rem] md:gap-x-[1.2rem] ${
                isActive ? 'border-default' : 'border-transparent hover:text-dark-blue'
              }`
            }
          >
            <span className="font-bold">03</span>
            <span>technology</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
