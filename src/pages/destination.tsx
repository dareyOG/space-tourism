// type Destination = 'europa' | 'mars' | 'moon' | 'titan';

// import { Outlet } from 'react-router-dom';
import DestinationContent from '../components/DestinationContent';

function Destination() {
  return (
    <section className="p-[2.4rem] flex lg:px-0 border border-default">
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

/* 
 <div className="flex flex-col gap-y-[1.6rem]">
              <div className="">moon</div>
              <div className="">
                see our planet as you've never seen it before. A perfect relaxing trip awat to help
                regain perspective and come back refreshed. While you're there, take in some history
                by visiting the Luna 2 and Apollo 11 landing sites.
              </div>
            </div>
            <div className="flex flex-col gap-y-[2.4rem]">
              <div className="flex flex-col gap-y-[1.2rem]">
                <p>avg. distance</p>
                <p>384400 km</p>
              </div>
              <div className="flex flex-col gap-y-[1.2rem]">
                <p>est. travel time</p>
                <p>3 days</p>
              </div>
            </div>

*/
