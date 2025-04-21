import React from 'react'

const Sidebar = ({image, handleToggleModal}) => {
  return (
    <div className='sidebar'>
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContent">
        <h2>{image.title}</h2>

        <div>
          <p>Description:</p>
          <p>{image.explanation}</p>
        </div>

        <button onClick={handleToggleModal}>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
      </div>
    </div>
  )
}

export default Sidebar