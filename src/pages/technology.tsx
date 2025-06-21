import { useParams } from 'react-router-dom';

type Technology = 'capsule' | 'spaceport' | 'vehicle';

function Technology() {
  const x = useParams<{ name: Technology }>();
  console.log(x.name);

  // fetch technoogy data from params

  return <div>technology</div>;
}

export default Technology;
