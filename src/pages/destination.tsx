import DestinationContent from '../components/DestinationContent';

function Destination() {
  return (
    <section className="h-full p-[2.4rem] flex justify-center items-center lg:px-0 border border-red-500">
      <div className="flex flex-col gap-y-[2.4rem] border border-green-500">
        <div className="flex gap-x-[2.4rem] justify-center lg:justify-start border border-default">
          <span className="font-mono font-bold text-[1.6rem] tracking-[15%] opacity-15">01</span>
          <span className="text-[1.6rem] md:text-[2.8rem] uppercase">pick your destination</span>
        </div>
        <DestinationContent />
      </div>
    </section>
  );
}

export default Destination;
