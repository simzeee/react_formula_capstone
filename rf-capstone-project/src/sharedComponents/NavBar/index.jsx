import SessionContext from "context/sessionContext";
import { useContext } from "react";

const NavBar = () => {
  const { username } = useContext(SessionContext);
  return (
    <nav className="bg-emerald-800 flex justify-center font-lao">
      <div className="w-full max-w-5xl flex flex-row items-center justify-between px-8 py-2">
        <div className="font-playfair text-white text-2xl flex flex-col items-center">
          <img
            className="w-10 "
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png
"
          />
          Rica&apos;s Plants
        </div>
        <div className="">
          <button className="flex items-center text-emerald-200">
            <i className="mr-2 text-xl fa-solid fa-user"></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
