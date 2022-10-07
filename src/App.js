import React from 'react'
import CalButton from './CalButton'
import dataList from './dataList'
import Display from './Display'

function App() {
  return (
    <div className='mx-auto w-[25rem] mt-6'><Display/>
    
    <div className='grid grid-cols-4'>{dataList.map(e => <CalButton {...e} />)}</div>
    </div>
  )
}

export default App