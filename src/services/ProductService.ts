import {parse, safeParse} from 'valibot'
import { DraftProductSchema, ProductSchema, ProductsSchema, type Product} from "../types"
import axios from "axios"

type ProductData = {
      [k: string]: FormDataEntryValue;
}

//Funcion para a;adir productos
export async function addProduct(data:ProductData){  //Manda los productos a la API
    try{
        const result = safeParse(DraftProductSchema, {  //leemos el producto
            name: data.name,
            price: +data.price   //Lo hacemos numero con +
        })
        if(result.success){  //Si se validan bien los datos, mandamos los datos
            const url = `${import.meta.env.VITE_API_URL}/api/products`  //Es la api que configuramos en el servidos Node
            await axios.post(url, {
                name: result.output.name,
                price: result.output.price
            })
        } else{
            throw new Error("Datos no validos") //Si no se validan es un error
        }

    } catch (error) {
        console.log(error)
    }
}


//Funcion para mostrar productos
export async function getProducts(){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products`  //Es la api que configuramos en el servidos Node
        const {data} = await axios.get(url)
        console.log(data)
        const result = safeParse(ProductsSchema, data.data)
        console.log(result)
        if(result){
            return result.output
        } else{
            throw new   Error('Hubo un error');
        }
    } catch (error) {
        console.log(error)
    }
}


//Funcion para mostrar el prioducto al editar
export async function getProductById(id:Product['id']){
    try {
        const url = `${import.meta.env.VITE_API_URL}/api/products/${id}`  //Es la api que configuramos en el servidos Node
        const {data} = await axios.get(url)
        const result = safeParse(ProductSchema, data.data)
        if(result){
            return result.output
        } else{
            throw new   Error('Hubo un error');
        }
    } catch (error) {
        console.log(error)
    }
}