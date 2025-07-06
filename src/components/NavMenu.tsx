import { Link } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

import { X } from 'lucide-react';

const navLinks = ['home', 'destination', 'crew', 'technology'];

function NavMenu() {
  const navRef = useRef<HTMLElement>(null);
  const { closeNavMenu } = useContext(NavMenuContext);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      // Check if the click occurred outside the navbar
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNavMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef, closeNavMenu]);

  return (
    <nav
      ref={navRef}
      className="md:hidden bg-light-blue/15 backdrop-blur-lg fixed z-10 top-0 right-0 w-full max-w-[80vw] h-screen pl-[3.2rem] flex flex-col gap-y-[4.8rem]"
    >
      <div className=" py-[3.2rem] pr-[2.4rem] flex justify-end">
        <button onClick={closeNavMenu} className="lg:hidden">
          <X />
        </button>
      </div>
      <ul className="flex flex-col gap-y-[3.2rem] text-[1.6rem] uppercase">
        {navLinks.map((link, index) => (
          <li>
            <Link
              to={link === 'home' ? '/' : link}
              className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent hover:border-default"
            >
              <span className="font-bold">
                {index <= 9 ? index.toString().padStart(2, '0') : index.toString()}
              </span>
              <span>{link}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
