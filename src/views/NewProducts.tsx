
import { Link, Form, useActionData, type ActionFunctionArgs, redirect } from "react-router-dom"
import ErrorMessage from "../components/ErrorMessage"
import {addProduct} from "../services/ProductService"
import ProductForm from "../components/ProductForm"

export async function action({request}:ActionFunctionArgs) {   //Captura el valor del input con action
  const data = Object.fromEntries(await request.formData())   //Accede a los datos del FormData
  let error = ""  //Iniciamos el error
  if(Object.values(data).includes("")){    //Si esta vacio regresa un error
    error = "Fields should not be empty"
  }
  if(error.length) return error    //Si existe el error regresamos el error

  await addProduct(data)   //Espera a que el servicio de ProductServices haga lo sutyo
  return redirect('/')       //Redirige a home
}


export default function NerProducts() {

  const error = useActionData() as string  //Mandamos a llamar al error


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

      {/* Formulario */}

      <Form 
        className="mt-10"
        method='POST'
      >
  
      <ProductForm/>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input
          type="submit"
          className="mt-5 w-full p-2 text-lg cursor-pointer bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg shadow-md shadow-teal-500/50 hover:shadow-lg hover:shadow-teal-500/70
               transition-all duration-300 ease-in-out"
          value="Add product"
        />
      </Form>

    </>
  )
}
