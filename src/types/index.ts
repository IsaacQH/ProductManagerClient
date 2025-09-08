
import {object, string, number, boolean, type InferOutput, array} from 'valibot'   

//Esquema para el registro del producto
export const DraftProductSchema = object({  //Esquema de objeto name y price
    name: string(),
    price: number()
}) 

//Esquema para el producto en la base de datos
export const ProductSchema = object({
    id: number(),
    name: string(),
    price: number(),
    availability: boolean()
})

//Esquema de produictos
export const ProductsSchema = array(ProductSchema)

export type Product = InferOutput<typeof ProductSchema>;