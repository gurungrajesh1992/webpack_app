import React from 'react'
import { Outlet } from 'react-router-dom'

const CommonButton = ({ handleClick, text }) => {
  return (
    <button className="buttonadd btn btn-sm btn-primary" onClick={handleClick}>
      {text}
    </button>
  )
}

export default CommonButton