import { LucideMenu } from 'lucide-react';

function HamburgerMenu() {
  return (
    <button
      onClick={() => {
        console.log('clicked menu bar');
      }}
      className="inline-block w-[2.4rem] h-[2.1rem] md:hidden"
    >
      <LucideMenu />
    </button>
  );
}

export default HamburgerMenu;
