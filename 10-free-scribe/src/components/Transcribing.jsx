function Transcribing({ dowanlading }) {
  return (
    <div className='flex flex-col items-center justify-center gap-6 md:gap-10 flex-1 pb-24'>
      <div className='flex flex-col gap-2 sm:gap-4'>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
          <span className='text-red-400 bold'>Transcribing</span>
        </h1>
      </div>

      <div className='flex flex-col gap-2 sm:gap-4 max-w-[400px] mx-auto w-full'>
        {[1, 2, 3].map((val) => (
          <div
            key={val}
            className={`rounded-full h-2 sm:h-3 bg-gradient-to-r from-red-200 to-indigo-100 loading loading-${val}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Transcribing;
