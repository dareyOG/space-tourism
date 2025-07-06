import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="h-full p-[2.4rem] md:px-[4rem] md:py-[12.8rem] border-2 border-red-500">
      <div className="border border-green-500 grid grid-rows-2 gap-y-[.8rem]">
        <div className="flex flex-col gap-y-[2.4rem] items-center text-center ">
          <p className="text-[1.6rem] uppercase"> so, you want to travel to</p>
          <h1 className="uppercase text-[8rem]">space</h1>
          <p className="font-serif text-[1.5rem]">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-center items-center">
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
{
  /* <p className="text-[1.6rem] md:text-[2.8rem] md:font-mono uppercase">
  {' '}
  so, you want to travel to
</p>
<h1 className=" text-[8rem] md:text-[14.4rem] uppercase lg:animate-pulse">space</h1>
<p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] md:font-serif leading-[180%] text-light-blue text-center lg:text-justify">
  Let’s face it; if you want to go to space, you might as well genuinely go to outer space
  and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
  a truly out of this world experience!
</p> */
}

export default Home;

/* 

<div className="grid lg:grid-cols-[auto-fit,repeat(minmax)] md:grid-cols-1 border-2 border-green-500">
        <div className="w-[54rem] flex flex-col gap-y-[2.4rem] text-center md:w-[51.2rem] md:space-y-[2.4rem] md:mx-auto border border-red-500">
          <p className="text-[1.6rem] md:text-[2.8rem] md:font-mono uppercase">
            {' '}
            so, you want to travel to
          </p>
          <h1 className="text-[8rem] md:text-[14.4rem] uppercase lg:animate-pulse">space</h1>
          <p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] md:font-serif leading-[180%] text-light-blue text-center lg:text-justify">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-end items-center border border-default my-auto">
          <Link
            to="/destination"
            className="flex justify-center items-center text-[1.8rem] md:text-[3.2rem] uppercase rounded-full bg-default w-[14.4rem] md:w-[27.2rem] aspect-square text-dark-blue hover:text-opacity-50 mx-auto lg:mx-0 hover:shadow-[0_0_0_7.5rem_rgb(225,225,225,.3)] transition-all ease-out duration-300 "
          >
            Explore
          </Link>
        </div>
      </div>

*/

// h-full p-[2.4rem] md:px-[4rem] md:py-[12.8rem] gap-y-[.8rem] lg:px-0 border border-red-500

// animate-pulse lg:animate-bounce hover:animate-none
{
  /* <div className="grid grid-cols-[repeat(minmax(38rem,1fr))] gap-y-[.8rem] border-2 border-red-500 lg:w-[80%] lg:mx-auto">
        <div className="text-center md:w-[51.2rem] md:space-y-[2.4rem] md:mx-auto border border-red-500">
          <p className="text-[1.6rem] md:text-[2.8rem] md:font-mono uppercase">
            so, you want to travel to
          </p>
          <h1 className="text-[8rem] md:text-[14.4rem] uppercase lg:animate-pulse">space</h1>
          <p className="font-serif text-[1.5rem] md:text-[1.6rem] lg:text-[1.8rem] md:font-serif leading-[180%] text-light-blue text-center lg:text-justify">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="flex justify-center items-center aspect-square">
          {' '}
          <Link
            to="/destination"
            className="flex justify-center items-center text-[1.8rem] md:text-[3.2rem] uppercase rounded-full bg-default w-[14.4rem] md:w-[27.2rem] aspect-square text-dark-blue hover:text-opacity-50 mx-auto lg:mx-0 hover:shadow-[0_0_0_7.5rem_rgb(225,225,225,.3)] transition-all ease-out duration-300 "
          >
            Explore
          </Link>
        </div>
      </div> */
}
