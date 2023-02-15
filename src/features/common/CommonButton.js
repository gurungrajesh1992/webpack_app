import React from 'react'

const CommonButton = ({ handleClick, text }) => {
  return (
    <button className="buttonadd btn btn-sm btn-primary" onClick={handleClick}>
      {text}
    </button>
  )
}

export default CommonButton