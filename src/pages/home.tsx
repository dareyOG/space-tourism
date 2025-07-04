import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="h-full p-[2.4rem] md:px-[4rem] md:py-[12.8rem] flex lg:px-0">
      <div className="flex flex-col gap-[4.8rem] lg:gap-0 lg:flex-row items-center justify-center lg:justify-normal md:w-[51.2rem] lg:w-[111rem] mx-auto">
        <div className="flex flex-col justify-center text-center lg:text-start lg:w-[54rem] gap-[2.4rem]">
          <p className="text-[1.6rem] md:text-[2rem] lg:text-[2.8rem] md:font-mono uppercase">
            so, you want to go to
          </p>
          <h1 className="text-[8rem] md:text-[14.4rem] uppercase lg:animate-pulse">space</h1>
          <p className="font-serif text-[1.5rem] md:text-[1.9rem] lg:text-[1.8rem] md:font-serif leading-[180%] text-light-blue text-center lg:text-justify">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="w-full lg:flex lg:justify-end lg:items-end lg:w-[54rem] lg:h-[54rem]">
          <Link
            to="/destination"
            className="flex justify-center items-center text-[1.8rem] md:text-[3.2rem] uppercase rounded-full bg-default w-[14.4rem] md:w-[27.2rem] aspect-square text-dark-blue hover:text-opacity-50 mx-auto lg:mx-0 hover:shadow-[0_0_0_7.5rem_rgb(225,225,225,.3)] transition-all ease-out duration-300 "
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;

// animate-pulse lg:animate-bounce hover:animate-none
