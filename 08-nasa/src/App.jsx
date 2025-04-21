import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod"

function App() {
  const [showModal, setShowModal] = useState(false);
  const [imageData, setImageData] = useState({})

  function handleToggleModal() {
    setShowModal(prev => !prev)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        const data = await res.json();
        setImageData(data);
        console.log(data)

      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])


  return (
    <>
      {imageData.hdurl ? <Main image={imageData} /> : <p>Loading...</p>}
      {showModal &&  <Sidebar image={imageData} handleToggleModal={ handleToggleModal} />}
      <Footer image={imageData} handleToggleModal={ handleToggleModal} />
    </>
  )
}

export default App
