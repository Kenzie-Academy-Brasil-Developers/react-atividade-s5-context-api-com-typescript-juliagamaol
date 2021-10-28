import React from 'react'
import { useCart } from '../../Providers/Cart'
import Button from '../Button'
import { Card, ContainerCard } from '../Products/styles'

export default function CartList() {
    const{cart, deleteProduct} = useCart()

    return (
        <ContainerCard>
            {cart.map(item=>(
                <Card>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                    <p>{item.description.substring(item.description.length - 0)}</p>
                    <strong>{item.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</strong>
                    <Button onClick={()=>deleteProduct(item)} whiteSchema={false}>Remover do carrinho</Button>
                </Card>
            ))}
        </ContainerCard>
    )
}
