import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import { NavMenuContext } from '../context/NavMenuContext';

import { X } from 'lucide-react';

const navLinks = ['home', 'destination', 'crew', 'technology'];

function NavMenu() {
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const { closeNavMenu, isNavMenu } = useContext(NavMenuContext);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNavMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef, closeNavMenu]);

  return (
    <nav
      ref={navRef}
      className={`md:hidden bg-light-blue/15 backdrop-blur-lg fixed z-10 top-0 right-0 w-full max-w-[80vw] h-screen pl-[3.2rem] flex flex-col gap-y-[4.8rem] transform ${
        isNavMenu ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className=" py-[3.2rem] pr-[2.4rem] flex justify-end">
        <button onClick={closeNavMenu} className="lg:hidden">
          <X />
        </button>
      </div>
      <ul className="flex flex-col gap-y-[3.2rem] text-[1.6rem] uppercase">
        {navLinks.map((link, index) => (
          <li>
            <button
              className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent w-full hover:border-default"
              onClick={() => {
                navigate(link === 'home' ? '/' : link);
                closeNavMenu();
              }}
            >
              <span className="font-bold">
                {index <= 9 ? index.toString().padStart(2, '0') : index.toString()}
              </span>
              <span className="uppercase">{link}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
