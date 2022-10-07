import React,{useState} from 'react'
import CalButton from './CalButton'
import dataList from './dataList'
import Display from './Display'

function App() {
  const [up, setUp] = useState('123456789')
  const [down, setDown] = useState('')

  function cal() {

  }

  return (
    <div className='mx-auto w-[25rem] mt-6'><Display up={up} down={down}/>
    
    <div className='grid grid-cols-4'>{dataList.map(e => <CalButton {...e} down={setDown} />)}</div>
    </div>
  )
}

export default App