import { useDispatch, useSelector } from "react-redux";
import CategoryItems from "./CategoryItems";
// import { clearCart } from "../utils/cartSlice";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <>
        <div className="flex justify-center mb-8">
            <button
                className="search-btn outline px-4 rounded bg-orange-500 text-white flex items-center py-2"
                onClick={handleClearCart}
            >
                <span>Clear Cart</span>
            </button>
            </div>
            <div className="flex justify-center w-full h-full flex-col max-w-[768px] m-auto gap-8">
                {cartItems.length === 0 ? <div className="flex flex-col p-4 bg-orange-200 rounded mb-8"><h1 className="text-xl font-bold">Cart is empty. Add items to the cart.</h1></div> :
                    <div className="flex flex-col p-4 bg-orange-200 rounded">
                        <div>
                            <CategoryItems items={cartItems} />
                        </div>
                    </div>
                }
            </div>
        </>
    );
};

export default Cart;