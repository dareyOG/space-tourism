import { useSearchParams } from 'react-router-dom';

const crew = ['douglas hurley', 'mark shuttleworth', 'victor glover', 'anousheh ansari'];

function CrewNav() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currMember = searchParams.get('crew') || crew[0];
  console.log(currMember);

  return (
    <nav>
      <ul className="flex gap-x-[1.6rem] justify-center items-start">
        {crew.map(member => (
          <li key={member}>
            <button
              onClick={() => {
                searchParams.set('crew', member.split(' ').join('-').toLowerCase());
                setSearchParams(searchParams);
              }}
              className={`w-[1.4rem] aspect-square rounded-full ${
                currMember?.split('-').join(' ') === (`${member}` || crew[0])
                  ? 'bg-default hover:bg-dark-blue/50'
                  : 'bg-light-blue/50 hover:bg-default'
              }`}
            ></button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewNav;
