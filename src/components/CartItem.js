import React, {useContext} from 'react'
import {Context} from '../Context'
import PropTypes from "prop-types"
import useHover from '../hooks/useHover'

function CartItem({item}) {

    const {removeItems} = useContext(Context)
    
    const [hovered, ref] = useHover()
    const iconClass = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item" onClick={()=> removeItems(item.id)}>
            <i 
            className={iconClass}
            ref={ref}
            ></i>
            <img src={item.url} width="130px" alt='' />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem

