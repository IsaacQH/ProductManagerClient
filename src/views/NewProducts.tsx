
import { Link } from "react-router-dom"

export default function NerProducts() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-gray-600'>New product registration</h2>
        <Link
          to="/"
          className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-lg
               shadow-md shadow-gray-500/50 hover:shadow-lg hover:shadow-gray-500/70
               transition-all duration-300 ease-in-out'
        >
          Return
        </Link>
      </div>
    </>
  )
}
