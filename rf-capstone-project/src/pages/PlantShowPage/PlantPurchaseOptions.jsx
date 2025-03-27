import clsx from "clsx";
import { useState } from "react";
import { POT_COLORS } from "sharedComponents/util";
import * as carService from "services/cart.js";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="my-10">
        <div className="text-emerald-700 flex">
          <i className="text-2xl fa-solid fa-brush mr-2"></i>
          <div className="text-lg">Pot Colors</div>
        </div>
        <div className="flex my-4">
          {plant.images.map((image, idx) => (
            <div
              className="mx-2 flex flex-col items-center"
              key={image.pot_color}
              onMouseEnter={() => setImageIdx(idx)}
            >
              <div
                className={clsx(
                  "rounded-full w-10 h-10",
                  POT_COLORS[image.pot_color],
                  imageIdx === idx &&
                    "outline outline-offset-2 outline-slate-500"
                )}
              ></div>
              <div
                className={clsx(
                  "mt-1",
                  imageIdx === idx ? "text-slate-700" : "text-slate-500"
                )}
              >
                {image.pot_color}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="rounded-full flex items-center text-xl text-slate-500 border-2 border-slate-300 px-3 py-4">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="mx-4 text-2xl text-emerald-700">{quantity}</div>
          <button onClick={() => setQuantity(quantity + 1)}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <button
          onClick={async () => {
            setIsLoading(true);
            const response = await carService.addPlantToCart({
              quantity,
              plantId: plant.id,
              potColor: plant.images[imageIdx].pot_color,
            });
            setIsLoading(false);
          }}
          className="ml-2 flex-1 rounded-full bg-emerald-700 text-white text-xl flex justify-center items-center hover:bg-emerald-800"
        >
          {isLoading ? (
            <i className="mr-2 fa-solid fa-spinner animate-spin"></i>
          ) : (
            <i className="mr-2 text-2xl fa-solid fa-cart-plus"></i>
          )}
          add to cart
        </button>
      </div>
    </>
  );
};

export default PlantPurchaseOptions;
