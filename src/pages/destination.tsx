import { useParams } from 'react-router-dom';

type Destination = 'europa' | 'mars' | 'moon' | 'titan';

function Destination() {
  const params = useParams<{ name: Destination }>();

  console.log(params);

  return (
    <section className="absolute top-0 left-0 right-0 z-0 bg-bg-destination md:bg-bg-destination_tablet lg:bg-bg-destination_desktop bg-center bg-cover bg-no-repeat sm:p-[2.4rem] lg:px-0 h-screen border-2 border-solid border-[#aac234] grid grid-cols-1"></section>
  );
}

export default Destination;
