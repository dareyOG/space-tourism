import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

function NavMenu({ toggleNavMenu }: { toggleNavMenu: () => void }) {
  return (
    <nav className="md:hidden bg-light-blue/15 backdrop-blur-lg fixed top-0 right-0 w-full max-w-[65vw] h-screen pl-[3.2rem] flex flex-col gap-y-[4.8rem] transition-all duration-300">
      <div className=" py-[3.2rem] pr-[2.4rem] flex justify-end">
        <button onClick={toggleNavMenu} className="lg:hidden">
          <X />
        </button>
      </div>
      <ul className="flex flex-col gap-y-[3.2rem] text-[1.6rem] uppercase">
        <li>
          <Link
            to={'home'}
            className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent hover:border-default"
          >
            <span className="font-bold">00</span>
            <span>home</span>
          </Link>
        </li>
        <li>
          <Link
            to={'destination'}
            className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent hover:border-default"
          >
            <span className="font-bold">01</span>
            <span>destination</span>
          </Link>
        </li>
        <li>
          <Link
            to={'crew'}
            className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent hover:border-default"
          >
            <span className="font-bold">02</span>
            <span>crew</span>
          </Link>
        </li>
        <li>
          <Link
            to={'technology'}
            className="flex items-center gap-x-[1.2rem] border-r-4 border-solid border-transparent hover:border-default"
          >
            <span className="font-bold">03</span>
            <span>technology</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
