import * as cartService from "services/cart";

const CartItem = (props) => {
  const { item, fetchCart } = props;

  return (
    <div className="flex">
      <img className="w-28 rounded-md" src={item.image_src} />
      <div className="flex justify-between mx-4 flex-1">
        <div>
          <div className="text-xl font-playfair text-emerald-700">
            {item.plant_name}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="text-slate-400 w-14">color:</div>
            {item.pot_color}
          </div>
          <div className="text-slate-500 flex my-1">
            <div className="text-slate-400 w-14">qty:</div>
            {item.quantity}
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-slate-500">
            ${item.quantity * item.price_per_unit}
          </div>
          <button
            onClick={async () => {
              await cartService.removeItemFromCart({ itemId: item.id });
              fetchCart();
            }}
            className="mr-1 text-sm text-slate-400 hover:text-red-800"
          >
            <i className="text-base fa-light fa-regular fa-trash mr-1" />
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
