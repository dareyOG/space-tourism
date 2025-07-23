import DestinationContent from '../components/DestinationContent';

function Destination() {
  return (
    <section className="h-full p-[2.4rem] flex justify-center items-center md:p-[4rem] lg:px-0">
      <div className="flex flex-col gap-y-[2.4rem] w-full lg:w-[80%]">
        <div
          role="heading"
          className="flex gap-x-[2.4rem] justify-center md:justify-start items-center  text-[1.6rem] md:text-[2.8rem] font-mono"
        >
          <span className=" font-bold tracking-[15%] opacity-15">01</span>
          <span className=" uppercase">pick your destination</span>
        </div>
        <DestinationContent />
      </div>
    </section>
  );
}

export default Destination;
