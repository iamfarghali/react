import { useState } from 'react';
import Transcription from './Transcription';
import Translation from './Translation';

function Information() {
  const [tab, setTab] = useState('transcription');

  function handleTabChange(newTab) {
    setTab(newTab);
  }
  return (
    <main className='w-fit max-w-full mx-auto flex-1 p-4 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 pb-20'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
        Your <span className='text-red-400 bold'>Transcription</span>
      </h1>

      <div className='grid grid-cols-2 items-center mx-auto bg-white rounded-full shadow-md overflow-hidden'>
        <button
          onClick={() => handleTabChange('transcription')}
          className={`px-6 py-2 font-medium cursor-pointer text-red-400 duration-200 ${
            tab === 'transcription'
              ? 'bg-red-400 text-white'
              : 'hover:bg-red-100'
          }`}
        >
          Transcription
        </button>
        <button
          onClick={() => handleTabChange('translation')}
          className={`px-6 py-2 font-medium cursor-pointer text-red-400 duration-200   ${
            tab === 'translation' ? 'bg-red-400 text-white' : 'hover:bg-red-100'
          }`}
        >
          Translation
        </button>
      </div>

      {tab === 'transcription' ? <Transcription /> : <Translation />}
    </main>
  );
}

export default Information;
