function FileDisplay({ file, audioStream, handleAudioReset }) {
    const fileName = file ? file.name : 'Audio Stream';
    return (
        <main className='w-fit max-w-full mx-auto flex-1 p-4 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 pb-20'>
            <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
                Your <span className='text-red-400 bold'>File</span>
            </h1>

            <div className="flex items-center justify-center gap-2">
                <h3 className="font-semibold">Name: </h3>
                <p className="text-slate-500">{fileName}</p>
            </div>

            <div className="flex flex-col gap-4">
                <audio controls src={audioStream ? URL.createObjectURL(audioStream) : URL.createObjectURL(file)} />
                <div className="flex items-center justify-between gap-4 px-4 mt-4">
                    <button onClick={handleAudioReset} className="text-slate-500 cursor-pointer">
                        Reset
                    </button>

                    <button onClick={handleAudioReset} className="flex items-center gap-2 specialBtn px-4 py-2 text-red-400 rounded-xl">
                        <p>Transcribe</p>
                        <i className='fa-solid fa-pen-nib'></i>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default FileDisplay
