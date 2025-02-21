import React from 'react';

const Item = ({name,quantity,category,onClick}) => {
  
  return (
    <div className='flex flex-col items-center space-x-4 text-white hover:bg-blue-600 overflow-hidden border rounded border-white p-2' onClick={() => {onClick()}}>
    <div>{name}</div>
    <div>Buy {quantity} in {category}</div>
    </div>
  )
}

export default Item