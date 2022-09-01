import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
type ShoppingCartProps = {
    isOpen: boolean
}
export const ShoppingCart = ({ isOpen }:ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return(
        
        <Offcanvas show={isOpen} onHide={closeCart}placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(el => {
                        <CartItem key={el.id} {...el} />
                    })}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
