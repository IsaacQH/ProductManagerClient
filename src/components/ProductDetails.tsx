import { deleteProduct } from "../services/ProductService"
import type { Product } from "../types"
import { formatCurrency } from "../utils"
import { useNavigate, Form, type ActionFunctionArgs, redirect, useFetcher } from "react-router-dom"

type ProductDetailsProps = {
    product: Product
}

//Llamamos al servicio de delete
export async function action({params}:ActionFunctionArgs) {   //Captura el valor del input con action
    if(params.id !== undefined){
        await deleteProduct(Number(params.id))
        return redirect('/')
    }
}

export default function ProductDetails({product} : ProductDetailsProps) {

    const fetcher = useFetcher()  //Este hook ayuda a actualizar y permanecer en lapagina, como los likes en ig
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
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailable ? 'text-black ' : 'text-red-600'} w-full px-3 py-1 rounded-full text-xs font-bold 
                        bg-gray-100
                        hover:bg-gray-300
                        transition-colors duration-200 shadow-md hover:shadow-lg uppercase hover:cursor-pointer`}
                    >{isAvailable ? 'In stock' : 'Out of stock'}</button>
                </fetcher.Form>

            </td>
            <td className="p-3 text-lg ">
                <div className="flex gap-3.5 items-center justify-center ">
                    <button 
                        className="w-full p-3 text-lg text-center
                        bg-indigo-800 hover:bg-indigo-600 text-white py-2 px-5 rounded-lg
                        shadow-md shadow-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/70
                        transition-all duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => navigate(`/productos/${product.id}/editar`)}  //Navega al producto
                        >Edit</button>

                    <Form
                        className="w-full"
                        method="POST"
                        action={`productos/${product.id}/eliminar`}
                        onSubmit={ (e) => {
                            if(!confirm('Delete item')){
                                e.preventDefault()
                            }
                        }}  
                    >
                    <button className="w-full p-3 text-lg text-center
                        bg-red-800 hover:bg-red-600 text-white py-2 px-5 rounded-lg
                        shadow-md shadow-red-500/50 hover:shadow-lg hover:shadow-red-500/70
                        transition-all duration-300 ease-in-out hover:cursor-pointer">Remove</button>

                    </Form>
                   
                </div>
            </td>
        </tr>
  )
}
