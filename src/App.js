import React from 'react'
import CalButton from './CalButton'
import dataList from './dataList'

function App() {
  return (
    <div className='mx-auto w-[25rem]'><div className='h-4'></div>
    
    <div className='grid grid-cols-4'>{dataList.map(e => <CalButton {...e} />)}</div>
    </div>
  )
}

export default App