import bgVideo from "../assets/bgVideo.mp4";

const Landing = () => {
  return (
    <div className="landing w-full h-full flex-coflexl justify-center items-center relative transition-all duration-75">
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        className="w-full h-full absolute top-0 left-0 object-cover -z-10"
      />
      <div className="overlay w-full  bg-[#00000050]"></div>
      <div className="content w-full text-white flex flex-col justify-center items-center absolute px-[10em]">
        <h1 className="text-[2.5rem] lg:text-[3rem] w-full text-center font-semibold">
          Unlock the Mysteries of the Cosmos
        </h1>
        <p className="text-center lg:text-[1.2rem] text-[.8rem] font-light">
          Explore the breathtaking world of meteor strikes and cosmic events.
          Delve into the history of meteorites, from their awe-inspiring
          appearances to their impact on Earth.
        </p>
        <div className="flex justify-between my-[2em] font-semibold gap-[2em] text-[1rem] lg:text-[1.3rem]">
          <div className="w-[350px] text-center px-[15px] py-[10px] border-2 border-black rounded-xl text-black font-semibold hover:bg-[#00000080] hover:text-white transition-all ease-in">
            <a href="">Learn more</a>
          </div>
          <div className="w-[350px] text-center px-[15px] py-[10px] border-2 border-black rounded-xl bg-[#00000080] text-white hover:bg-transparent hover:text-black transition-all ease-in">
            <a href="/search">Search Meteorites</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
