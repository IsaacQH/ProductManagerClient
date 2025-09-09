

import { Link, Form, useActionData, type ActionFunctionArgs, redirect, type LoaderFunctionArgs, useLoaderData } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"
import {getProductById, updateProduct} from "../services/ProductService"
import type { Product } from "../types"
import ProductForm from "../components/ProductForm"


//Funcion para cargar el elemento por id
export async function loader({params}: LoaderFunctionArgs) {    //extrae el valor : dse la url, en este caso id
    if(params.id !== undefined){
        const product = await getProductById(Number(params.id)) //Hacemos que el valor sea un numero  
        if(!product){
            return redirect('/')  //Producto no encontrado
        }
        return product  //Regresamos el producto finalmente
    }
}

//Funcion action que permite realizar el update a la base de datos
export async function action({request, params}:ActionFunctionArgs) {   //Captura el valor del input con action
  const data = Object.fromEntries(await request.formData())   //Accede a los datos del FormData
  let error = ""  //Iniciamos el error
  if(Object.values(data).includes("")){    //Si esta vacio regresa un error
    error = "Fields should not be empty"
  }
  if(error.length) return error    //Si existe el error regresamos el error

  if(params.id !== undefined){
    await updateProduct(data, Number(params.id))   //Espera a que el servicio de ProductServices haga lo sutyo
  }

  return redirect('/')       //Redirige a home
}

//Disponibilidad
const availabilityOptions = [
   { name: 'In stock', value: true},
   { name: 'Out of stock', value: false}
]

export default function EditProduct() {

    const product = useLoaderData() as Product
    const error = useActionData() as string  //Mandamos a llamar al error

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='text-3xl font-bold text-gray-600'>Edit product</h2>
        <Link
          to="/"
          className='bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-5 rounded-lg
               shadow-md shadow-gray-500/50 hover:shadow-lg hover:shadow-gray-500/70
               transition-all duration-300 ease-in-out'
        >
          Return
        </Link>
      </div>

      {/* Formulario */}

      <Form 
        className="mt-10"
        method='POST'
      >
  
        <ProductForm 
            key={product.id} 
            product={product}
        />

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="availability"
            >Availability:</label>
            <select 
                id="availability"
                className="mt-2 block w-full p-3 bg-gray-50"
                name="availability"
                defaultValue={product?.availability.toString()}
            >
                {availabilityOptions.map(option => (
                <option key={option.name} value={option.value.toString()}>{option.name}</option>
                ))}
            </select>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input
          type="submit"
          className="mt-5 w-full p-2 text-lg cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70
               transition-all duration-300 ease-in-out"
          value="Save changes"
        />
      </Form>

    </>
  )
}
