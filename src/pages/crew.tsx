import { useParams } from 'react-router-dom';

function Crew() {
  const role = useParams<{ role: string }>();
  console.log(role);
  return <div>crew</div>;
}

export default Crew;
