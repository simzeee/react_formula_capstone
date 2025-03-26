import clsx from "clsx";
import { POT_COLORS } from "sharedComponents/util";

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;

  return (
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
                imageIdx === idx && "outline outline-offset-2 outline-slate-500"
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
  );
};

export default PlantPurchaseOptions;
