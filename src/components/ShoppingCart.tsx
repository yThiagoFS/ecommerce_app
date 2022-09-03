import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { CartItem } from "./CartItem"
import { formatCurrency } from "../utils/formatCurrency"
import { items } from "../data/data"
type ShoppingCartProps = {
    isOpen: boolean
}
export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const { closeCart, cartItems } = useShoppingCart()
    return (

        <Offcanvas
            show={isOpen}
            onHide={closeCart}
            placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = items.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                </Stack>

            </Offcanvas.Body>
        </Offcanvas>
    )
}
