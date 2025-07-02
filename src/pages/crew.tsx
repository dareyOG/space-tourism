import { useParams } from 'react-router-dom';

type Crew = 'commander' | 'engineer' | 'pilot' | 'specialist';

function Crew() {
  const role = useParams<{ role: Crew }>();
  console.log(role);

  // fetch crew data
  return <section className="h-screen"></section>;
}

export default Crew;
