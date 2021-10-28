import { createContext, ReactNode, useContext, useState } from "react";

interface CartProviderProps{
    children:ReactNode
}

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface CartProviderData{
    cart:Product[]
    addProduct: (product:Product) => void
    deleteProduct: (product:Product) => void
}

const CartContext = createContext<CartProviderData>({} as CartProviderData)

export const CartProvider = ({children}:CartProviderProps) =>{
    const[cart, setCart] = useState<Product[]>([])

    const addProduct = (product:Product) =>{
        setCart([...cart,product])
    }

    const deleteProduct = (deleted:Product) =>{
        const removedOfCart = (el:Product) =>el.id === deleted.id
        const index = cart.findIndex(removedOfCart)
        const newList = cart.map(item=>(item))
        console.log(newList)
        newList.splice(index,1)
        setCart(newList)
        /* 
            const removedOfCart = (el) => el.id === productId
            const index = currentSale.findIndex(removedOfCart)
            const newList = currentSale.map(item=>(item))
            newList.splice(index,1)
            setCurrentSale(newList)
        */
        
    }

    return(
        <CartContext.Provider value={{cart, addProduct,deleteProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)