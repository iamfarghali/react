import './App.css'
import Navbar from './components/Navbar'
import overviewImg from "./assets/overview.png"
function App() {
  return (
  <div className='bg-gray-100 bg- min-h-screen h-[900px]'>
    <Navbar />
    {/* <div className='flex flex-col max-w-96 py-96'>
      <img src={overviewImg} className='w-100 h-100' alt=""/>
    </div> */}
  </div>
  )
}

export default App
