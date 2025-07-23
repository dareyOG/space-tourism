import { NavLink } from 'react-router-dom';

const navLinks = ['home', 'destination', 'crew', 'technology'];

function NavBar() {
  return (
    <nav className="hidden md:flex md:items-center">
      <ul className="bg-default/5 opacity-100 backdrop-blur-lg flex md:justify-end lg:justify-between items-center gap-[3.2rem] md:gap-[4.8rem] text-[1.6rem] font-mono uppercase text-white gap-x-[2rem] px-[2.4rem] md:px-[4rem] lg:px-[6.4rem] border-2 border-transparent">
        {navLinks.map((link, index) => (
          <li key={link}>
            <NavLink
              to={link === 'home' ? '' : link}
              className={({ isActive }) =>
                `text-[1.6rem] flex items-center border-b-2 justify-between md:h-[10rem] lg:h-[9.6rem] md:gap-x-[1.2rem] ${
                  isActive ? 'border-default' : 'border-transparent hover:text-light-blue'
                }`
              }
            >
              <span className="font-bold">
                {index <= 9 ? index.toString().padStart(2, '0') : index.toString()}
              </span>
              <span>{link}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
