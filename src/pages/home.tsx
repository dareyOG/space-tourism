import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="p-[2.4rem] md:px-[4rem] md:py-[12.8rem] lg:flex lg:items-end">
      <div className="flex flex-col lg:flex-row lg:justify-between md:w-[51.2rem] gap-y-[.8rem] lg:w-[80%] md:mx-auto">
        <div className="flex flex-col gap-y-[2.4rem] items-center lg:items-start lg:justify-end text-center lg:text-balance lg:w-1/2 lg:text-start w-fit ">
          <p className="text-[1.6rem] uppercase"> so, you want to travel to</p>
          <h1 className="uppercase text-[8rem] animate-pulse">space</h1>
          <p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-end items-center aspect-square md:aspect-auto">
          <Link
            to="/destination"
            className="flex justify-center items-center text-[1.8rem] md:text-[3.2rem] uppercase rounded-full bg-default w-[14.4rem] md:w-[27.2rem] aspect-square text-dark-blue hover:text-opacity-50 mx-auto lg:mx-0 hover:shadow-[0_0_0_7.5rem_rgb(225,225,225,.3)] transition-all ease-in-out duration-500"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
