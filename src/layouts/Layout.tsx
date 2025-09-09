
import {Outlet} from 'react-router-dom'

export default function Layouts() {
  return (
    <>
      <header className='bg-gradient-to-r from-slate-900 via-indigo-900 to-cyan-800 p-4 text-white'>
        <div className='mx-auto max-w-6xl py-10'>
          <h1 className='text-4xl font-extrabold text-white'>Inventory</h1> 
        </div>
      </ header>
      <main className='mt-10 mx-auto max-w-6xl p-10 bg-white shadow'>
        <Outlet />
      </main>
    </>
    
  )
}


