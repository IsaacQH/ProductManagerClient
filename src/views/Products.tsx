import { Link, useLoaderData } from "react-router-dom"
import { getProducts } from "../services/ProductService"
import ProductDetails from "../components/ProductDetails"
import { type Product } from "../types"

export async function loader() {
  const products = await getProducts() //Llama la funcion y regresa los productos y los guarda
  return products
}

export default function Products() {

  const products = useLoaderData() as Product[] //definimos los productos con el loader que creamos

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-gray-600'>Productos</h2>
        <Link
          to="productos/nuevo"
          className='bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-5 rounded-lg
               shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70
               transition-all duration-300 ease-in-out'
        >
          Add Product
        </Link>
      </div>

      <div className=" p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2">Product</th>
              <th className="p-2">Price</th>
              <th className="p-2">Availability</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
            <tbody>
              {products.map((product) => (
                <ProductDetails
                  key={product.id}
                  product={product}
                />
              ))}
            </tbody>
          
        </table>
      </div>
    </>
  )
}
