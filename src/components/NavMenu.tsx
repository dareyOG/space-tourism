import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

function NavMenu() {
  return (
    <nav className="md:hidden bg-light-blue/15 backdrop-blur-lg fixed top-0 right-0 w-full max-w-[65vw] h-screen pl-[3.2rem] flex flex-col gap-y-[4.8rem] transition-all duration-300">
      <div
        role="button"
        onClick={() => console.log('close menu')}
        className="lg:hidden py-[3.2rem] w-full flex justify-end pr-[2.4rem]"
      >
        <X />
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
