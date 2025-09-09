import type { Product } from "../types"

type ProductFormPorpos = {
    product?: Product
}

export default function ProductForm({product}: ProductFormPorpos) {
  return (
    <>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="name"
            >Name:</label>
            <input 
                id="name"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 rounded-lg"
                placeholder="Name of the Product"
                name="name"
                defaultValue={product?.name}  //Es opcional
            />
        </div>

        <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="price"
            >Price:</label>
            <input 
                id="price"
                type="number"
                className="mt-2 rounded-lg block w-full p-3 bg-gray-50"
                placeholder="Prece of the product. ej. 200, 300"
                name="price"
                defaultValue={product?.price}
            />
        </div> 

    </>
  )
}
