import React, {useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'
import useHover from '../hooks/useHover'

function Image({className, img}) {


const [hovered, ref] = useHover()
const {toggleFavorite, addCartItems, cartItems, removeItems} = useContext(Context)


const heart = hovered && 
    <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>

const filledHeart = img.isFavorite && 
    <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>

    function cartIcon() {
        const inCart = cartItems.some(photo => photo.id === img.id)
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart"
            onClick={() => removeItems(img.id)}
            ></i>
        }else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick = {() => addCartItems(img)}></i>
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            ref={ref}
            >
            <img src={img.url} className='image-grid' alt=''/>
            {heart}
            {cartIcon()}
            {filledHeart}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        url: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image