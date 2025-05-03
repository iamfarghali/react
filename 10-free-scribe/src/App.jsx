
import { useState } from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import FileDisplay from './components/FileDisplay';

function App() {
  const [file, setFile] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const isAudioAvailable = file || audioStream;

  function handleAudioReset() {
    setFile(null);
    setAudioStream(null);
  }

  return (
    <div className='flex flex-col max-w-[1200px] mx-auto w-full'>  
      <section className='flex flex-col min-h-screen'>
        <Header />
        {isAudioAvailable ? (
          <FileDisplay file={file} audioStream={audioStream} handleAudioReset={handleAudioReset} />
        ) : (
          <HomePage setFile={setFile} setAudioStream={setAudioStream} />
        )}
      </section>
      <Footer />
    </div>
  )
}

export default App
