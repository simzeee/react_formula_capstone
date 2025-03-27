import { RemoveScroll } from "react-remove-scroll";
import SessionContext from "context/sessionContext";
import { useContext, useEffect, useState } from "react";
import * as carService from "services/cart";
import LoadingSpinner from "pages/LoadingSpinner";
import CartItem from "./CartItem";

const CartModal = (props) => {
  const { setCartOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const { username } = useContext(SessionContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await carService.getCart();
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    })();
  }, []);
  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-end font-lato">
        <div className="bg-white h-screen w-full max-w-xl">
          <button
            className="absolute top-0 right-0 p-2"
            onClick={() => setCartOpen(false)}
          >
            <i className="fa-regular fa-circle-xmark text-4xl text-emerald-400"></i>
          </button>
          <div className="shadow-md bg-emerald-800 text-white font-playfair text-center py-7 text-3xl">
            {username}&apos;s Cart
          </div>
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
