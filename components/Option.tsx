import { History, MoveRight } from 'lucide-react'
import React from 'react'

const OptionCom = () => {
  return (
    <div className='flex items-center justify-center py-7'>
        <span className='text-btn'><History /></span> 
        <div className='flex items-center gap-2'>
            <span>Taraba State, Ng</span>    
            <span><MoveRight /></span>
            <span>Adamawa State, Ng</span>
        </div>
    </div>
  )
}

export default OptionCom