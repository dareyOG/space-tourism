import TechnologyContent from '../components/TechnologyContent';

function Technology() {
  return (
    <section className="p-[2.4rem] pb-[4.8rem] flex flex-col gap-y-[2.4rem] border border-green-500">
      <div className="flex justify-center items-center gap-x-[2.4rem] border border-default">
        <span className="font-mono font-bold text-[1.6rem] tracking-[15%] opacity-15">03</span>
        <span className="text-[1.6rem] md:text-[2rem] lg:text-[2.8rem] uppercase">
          Space launch 101
        </span>
      </div>

      <TechnologyContent />
    </section>
  );
}

export default Technology;
