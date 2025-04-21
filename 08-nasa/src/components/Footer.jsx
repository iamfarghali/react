import React from 'react'

const Footer = ({image, handleToggleModal}) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      
      <div>
          <h2>{image.title}</h2>
          <h1>APOD PROJECT</h1>
      </div>
      
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  )
}

export default Footer