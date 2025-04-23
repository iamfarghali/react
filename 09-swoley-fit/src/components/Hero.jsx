import Button from "./Button";

function Hero() {
  return (
    <div className="min-h-screen w-full max-w-[800px] mx-auto flex flex-col gap-1 sm:gap-2 md:gap-3 justify-center items-center px-4 -mb-22">
      <p className="uppercase font-bold">it's time to get</p>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold uppercase">
        Swole<span className="text-blue-400">normous</span>
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-xl text-center text-gray-300 font-light">
        I hereby acknowledgement that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming the local{" "}
        <span className="text-blue-400 font-medium"> mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>

      <Button>Accept & Agree</Button>
    </div>
  );
}

export default Hero;
