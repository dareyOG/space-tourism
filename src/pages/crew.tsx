import CrewContent from '../components/CrewContent';

type Crew = 'commander' | 'engineer' | 'pilot' | 'specialist';

function Crew() {
  return (
    <section className="h-full flex flex-col p-[2.4rem] border-2 border-red-500 gap-y-[2.4rem]">
      <div className="flex justify-center items-center gap-x-[2.4rem] border border-default">
        <span className="font-mono font-bold text-[1.6rem] tracking-[15%] opacity-15">02</span>
        <span className="text-[1.6rem] uppercase">Meet your crew</span>
      </div>
      <CrewContent />
    </section>
  );
}

export default Crew;
