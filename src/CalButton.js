import React from 'react'

function CalButton({text,cls}) {
  return (
    <div className={`flex items-center justify-center text-center border-2 h-20 ${cls} `}>{text}</div>
  )
}

export default CalButton