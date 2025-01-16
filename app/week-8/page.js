import React from 'react';
import NewItem from './newItem';


const Page = () => {
  return (
    <main className='flex flex-col items-center space-y-4 my-4'>
        <h1 className='text-5xl'>Shopping List</h1>
        <NewItem/>
    </main>
  )
}

export default Page