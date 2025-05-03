import { useEffect, useRef, useState } from "react";

function HomePage({setFile, setAudioStream}) {
    const [recordingState, setRecordingState] = useState("inactive");
    const [audioChunks, setAudioChunks] = useState([]);
    const [duration, setDuration] = useState(0);
    const mediaRecorderRef = useRef(null);
    const mimeType = "audio/webm";

    async function startRecording() {
        let stream;
        try {
            stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        }
        catch (error) {
            console.error("Error accessing microphone:", error);
            alert("Please allow microphone access to record audio.");
        }

        mediaRecorderRef.current = new MediaRecorder(stream, { type:mimeType });
        mediaRecorderRef.current.start();
        setRecordingState("recording");
        const dataChunks = [];
        mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                console.log("Audio chunk available:", event.data);
                dataChunks.push(event.data);
            }
        };
        setAudioChunks(dataChunks);
    }

    function stopRecording() {
        setRecordingState("inactive");
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: mimeType });
            setAudioStream(audioBlob);
            setFile(null);
            setAudioChunks([]);
            setDuration(0);
        };
    }
    
    function handleRecordButtonClick() {
        if (recordingState === "inactive") {
            startRecording();
        } else {
            stopRecording();
        }
    }

    useEffect(() => {
        if (recordingState === "recording") {
            const interval = setInterval(() => {
                setDuration((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [recordingState]);

    return (
        <main className='flex-1 p-4 flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 pb-20'>

        <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>
          Free<span className='text-red-400 bold'>Scribe</span>
        </h1>

        <h3 className="font-medium text-xs sm:text-base md:text-lg text-center">
            Record <span className="text-red-400">&rarr;</span> Transcribe <span className="text-red-400">&rarr;</span> Transalite
        </h3>

        <button onClick={handleRecordButtonClick} className="flex items-center gap-4 justify-between w-72 max-w-full mx-auto my-4 text-base  specialBtn px-4 py-2 rounded-xl">
            <p className="text-red-400">{recordingState === 'inactive' ? 'Record' : 'Stop recording'}</p>
            <div className="flex items-center gap-2">
                {duration > 0 && (
                    <p className="text-slate-500">{Math.floor(duration / 60)}:{String(duration % 60).padStart(2, '0')}</p>
                )}
                <i className={`fa-solid ${recordingState === 'inactive' ? 'fa-microphone' : 'fa-stop'}`}></i>
            </div>
        </button>

        <p className="text-base">
            Or <label htmlFor="file-upload" className="cursor-pointer text-red-400">upload</label> an mp3 file
            <input onChange={e => setFile(e.target.files[0])} id="file-upload" type="file" accept=".mp3,.wave" className="hidden" />            
        </p>
        <p className="italic text-slate-500">Free now free forever</p>
        </main>
    )
}

export default HomePage
