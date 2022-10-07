import React from 'react'

function CalButton({text,cls, id, down}) {


  return (
    <div className={`flex items-center justify-center text-center border-2 border-[#1E2022] h-20 cursor-pointer ${cls} `} id={`${id}`} onClick={()=> {down(text)}}>{text}</div>
  )
}

export default CalButton