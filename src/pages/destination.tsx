import { useParams } from 'react-router-dom';

type Destination = 'europa' | 'mars' | 'moon' | 'titan';

function Destination() {
  const params = useParams<{ name: Destination }>();

  console.log(params);

  return <div>destination</div>;
}

export default Destination;
