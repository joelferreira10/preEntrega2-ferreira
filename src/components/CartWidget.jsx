import '../index.css'
import cart from '../assets/cart.png'


function CartWidget() {
    return (
         <>
         <img src={cart} alt="" />
         <p>0</p>
         
        </>
         );
}

export default CartWidget;