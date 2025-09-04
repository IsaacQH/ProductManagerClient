import { Link } from "react-router-dom"

export default function Products() {
  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-gray-600'>Productos</h2>
        <Link
          to="productos/nuevo"
          className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-5 rounded-lg
               shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70
               transition-all duration-300 ease-in-out'
        >
          Add Product
        </Link>
      </div>
    </>
  )
}
