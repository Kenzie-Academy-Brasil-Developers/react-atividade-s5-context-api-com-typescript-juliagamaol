import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface ProviderProps{
    children: ReactNode
}
export default function Providers({children}:ProviderProps) {
    return <CartProvider>{children}</CartProvider>
}
