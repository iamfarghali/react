import React from 'react'

const Main = ({image}) => {
  return (
    <div className='bgContainer'>
      <img className='bgImage' src={image.hdurl} alt="mars" />
    </div>
  )
}

export default Main