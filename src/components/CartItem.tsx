import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { items } from "../data/data"
type CartItemProps = {
    id: number
    quantity:number
}
export const CartItem = ({id, quantity}:CartItemProps) => {
    const { removeFromCart } = useShoppingCart()
    const item = items.find(i => i.id === id)
    if(item == null) return null

    return(
        <Stack direction="horizontal" gap={2}>
            <img 
            src={item.imgUrl} 
            style={{width:"125px", height: "75px", objectFit: 'cover'}} />
        </Stack>
    )
}