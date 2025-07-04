import DestinationContent from '../components/DestinationContent';

function Destination() {
  return (
    <section className="p-[2.4rem] flex lg:px-0 border border-default h-full">
      <div className="flex flex-col gap-y-[2.4rem] border border-default w-full">
        <div className="flex gap-x-[2.4rem] justify-center border border-default">
          <span className="font-mono font-bold text-[1.6rem] tracking-[15%] opacity-15">01</span>
          <span className="text-[1.6rem] uppercase">pick your destination</span>
        </div>
        <DestinationContent />
      </div>
    </section>
  );
}

export default Destination;
