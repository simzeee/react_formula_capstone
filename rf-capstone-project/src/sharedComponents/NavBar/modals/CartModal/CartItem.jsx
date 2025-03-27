const CartItem = (props) => {
  const { item } = props;
  return (
    <div className="flex mx-6 my-8">
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
        <div className="text-slate-500">
          ${item.quantity * item.price_per_unit}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
