import CrewContent from '../components/CrewContent';

function Crew() {
  return (
    <section className="h-full p-[2.4rem] flex justify-center items-center md:p-[4rem] lg:px-0 ">
      <div className="flex flex-col gap-y-[2.4rem]  w-full lg:w-[80%]">
        <div
          role="heading"
          className="flex gap-x-[2.4rem] justify-center md:justify-start items-center  text-[1.6rem] md:text-[2.8rem] font-mono"
        >
          <span className=" font-bold tracking-[15%] opacity-15">02</span>
          <span className=" uppercase">Meet your crew</span>
        </div>
        <CrewContent />
      </div>
    </section>
  );
}

export default Crew;
