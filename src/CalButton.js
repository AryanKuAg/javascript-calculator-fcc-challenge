import React from 'react'

function CalButton({text,cls, id}) {
  return (
    <div className={`flex items-center justify-center text-center border-2 border-[#1E2022] h-20 ${cls} `} id={`${id}`}>{text}</div>
  )
}

export default CalButton