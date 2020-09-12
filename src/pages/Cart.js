import React, {useContext, useState} from "react"
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {

const {cartItems, emptyCart} = useContext(Context)
const cartItemElements = cartItems.map(item => {
    return  <CartItem key={item.id} item={item} />
})

const totalCost = cartItems.length * 5.99
const costDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
const [buttonText, setButtonText] = useState('Place Order')

function placeOrder(){
    setButtonText('Ordering...')
    setTimeout(() => {
        setButtonText('Place Order')
        console.log('Order placed!')
        emptyCart()
        }, 3000)
    
}

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            <div>{cartItemElements}</div>
            <p className="total-cost">Total: {costDisplay} </p>

            { cartItems.length > 0 ?
                <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
            </div>
            : <p>You have no items in cart! Put some :)</p>}
        </main>
    )
}

export default Cart