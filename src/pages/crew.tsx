import CrewContent from '../components/CrewContent';

function Crew() {
  return (
    <section className="h-full flex flex-col p-[2.4rem] border-2 border-red-500 gap-y-[2.4rem]">
      <header className="flex gap-x-[2.4rem] justify-center md:justify-start items-center border border-default text-[1.6rem] md:text-[2.8rem] font-mono">
        <span className="font-mono font-bold text-[1.6rem] tracking-[15%] opacity-15">02</span>
        <span className="text-[1.6rem] uppercase">Meet your crew</span>
      </header>
      <CrewContent />
    </section>
  );
}

export default Crew;
