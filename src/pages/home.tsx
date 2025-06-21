function Home() {
  return (
    <main className="flex flex-col gap-[4.8rem]">
      <div className="flex flex-col gap-[2.4rem] items-center">
        <div className="text-[1.6rem] uppercase">So, you want to travel to</div>
        <div className="uppercase text-[8rem]">space</div>
        <div className="text-[1.5rem] leading-[180%] text-center">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </div>
      </div>
      {/* <div className="flex justify-center items-center aspect-square "> */}
      <button
        className="text-[1.8rem] uppercase text-blue-900 bg-default w-[14.4rem] aspect-square rounded-full hover:text-opacity-50 hover:shadow-lg hover:shadow-blue-300/50 mx-auto"
        onClick={() => console.log('Explore')}
      >
        Explore
      </button>
      {/* </div> */}
    </main>
  );
}

export default Home;

/* 
preset-1 80
preset-2 56
preset-3 24
preset-4 18
preset-6 16
preset-8 14
preset-9 15
*/
