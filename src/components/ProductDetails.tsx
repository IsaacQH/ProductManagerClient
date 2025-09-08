import type { Product } from "../types"
import { formatCurrency } from "../utils"
import { useNavigate } from "react-router-dom"

type ProductDetailsProps = {
    product: Product
}

export default function ProductDetails({product} : ProductDetailsProps) {

    const navigate = useNavigate()
    
    const isAvailable = product.availability

  return (
        <tr className="border-b">
            <td className="p-3 text-lg text-gray-800 text-center">
                {product.name}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {formatCurrency(product.price)}
            </td>
            <td className="p-3 text-lg text-gray-800 text-center">
                {isAvailable ? 'In stock' : 'Out of stock'}
            </td>
            <td className="p-3 text-lg ">
                <div className="flex gap-3.5 items-center justify-center ">
                    <button 
                        className="p-3 text-lg text-center
                        bg-indigo-800 hover:bg-indigo-600 text-white py-2 px-5 rounded-lg
                        shadow-md shadow-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/70
                        transition-all duration-300 ease-in-out"
                        onClick={() => navigate(`/productos/${product.id}/editar`)}  //Navega al producto
                        >Edit</button>
                    <button className=" p-3 text-lg text-center
                        bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded-lg
                        shadow-md shadow-red-500/50 hover:shadow-lg hover:shadow-red-500/70
                        transition-all duration-300 ease-in-out">Remove</button>
                </div>
            </td>
        </tr>
  )
}
