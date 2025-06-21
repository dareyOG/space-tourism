import { X } from 'lucide-react';

function NavMenu() {
  return (
    <nav className="max-w-[25.4rem] h-screen pl-[3.2rem] flex flex-col gap-[4.8rem] border-2 border-solid border-blue-300">
      <div className="lg:hidden py-[3.2rem]">
        <X />
      </div>
      <ul className="">
        <li>
          <span>00</span>
          <span>home</span>
        </li>
        <li>
          <span>01</span>
          <span>destination</span>
        </li>
        <li>
          <span>02</span>
          <span>crew</span>
        </li>
        <li>
          <span>03</span>
          <span>technology</span>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
