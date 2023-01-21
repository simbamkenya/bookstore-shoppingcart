import React from 'react'

function Sidebar() {
  return (
    <div className='w-96 bg-green-100'>
        <h2 className='text-lg uppercase font-medium mt-4 px-4'>Category</h2>
        <ul className='p-4 space-y-2 flex flex-col'>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Thrillers</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Crime</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Romance</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Detective</a></li>
        </ul>
        <h2 className='text-lg uppercase font-medium mt-4 px-4'>Authors</h2>
        <ul className='p-4 space-y-2 flex flex-col'>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Sidney Sheldon</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Agatha Christie</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Nora Roberts</a></li>
            <li className='bg-slate-300 px-4 py-2 rounded-sm'><a href='#' className='text-sm font-medium'>Mejja Mwangi</a></li>
        </ul>
    </div>
  )
}

export default Sidebar