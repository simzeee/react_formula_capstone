import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "context/sessionContext";
import { useCallback, useContext, useEffect, useState } from "react";
import * as carService from "services/cart";
import LoadingSpinner from "pages/LoadingSpinner";
import CartItem from "./CartItem";
import clsx from "clsx";

const CartModal = (props) => {
  const { setCartOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { username } = useContext(SessionContext);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    const response = await carService.getCart();
    const data = await response.json();
    setItems(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subTotal = 0;
  for (let item of items) {
    totalQuantity += item.quantity;
    subTotal += item.quantity * item.price_per_unit;
  }
  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
        <div className="bg-white h-screen w-full max-w-xl flex flex-col">
          <button
            className="absolute top-0 right-0 p-2"
            onClick={() => setCartOpen(false)}
          >
            <i className="fa-regular fa-circle-xmark text-4xl text-emerald-400"></i>
          </button>
          <div className="shadow-md bg-emerald-800 text-white font-playfair text-center py-7 text-3xl">
            {username}&apos;s Cart
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex-1 overflow-y-scroll">
                {items.map((item, idx) => (
                  <div
                    className={clsx(
                      "mx-5 my-8 pt-8",
                      idx !== 0 && "border-t border-slate-200"
                    )}
                    key={item.id}
                  >
                    <CartItem item={item} fetchCart={fetchCart} />
                  </div>
                ))}
              </div>
              <div className="flex flex-col pb-4 px-4 text-slate-400 border-t border-slate-200">
                <div className="flex justify-between text-slate-400 py-4">
                  <div>{totalQuantity} items</div>
                  <div>
                    subtotal
                    <span className="ml-2 text-lg text-slate-500">
                      ${subTotal}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() =>
                    alert("this app is not a real plant selling site :)")
                  }
                  className="bg-emerald-700 rounded-full flex items-center justify-center py-3 text-lg text-white ml-2"
                >
                  checkout
                  <i className="ml-2 text-2xl fa-regular fa-arrow-right-to-line" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
