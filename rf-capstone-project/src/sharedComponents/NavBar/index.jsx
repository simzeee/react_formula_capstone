import SessionContext from "context/sessionContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartModal from "./modals/CartModal";
import ModalWrapper from "./modals/ModalWrapper";
import MobileMenuModal from "./modals/MobileMenuModal";

const NavBar = () => {
  const { username, signOut } = useContext(SessionContext);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        onMouseLeave={() => setUserMenuOpen(false)}
        className="bg-emerald-800 flex justify-center font-lao"
      >
        <div className="w-full max-w-5xl flex flex-row items-center justify-between px-8 py-2">
          <Link to="/plants">
            <div className="font-playfair text-white text-2xl flex flex-col items-center">
              <img
                className="w-10 "
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png
"
              />
              Rica&apos;s Plants
            </div>
          </Link>
          <div className="hidden sm:flex flex-1 justify-end">
            <div className="relative min-w-32">
              <button
                onClick={() => setUserMenuOpen(true)}
                className="flex items-center text-emerald-200"
              >
                <i className="mr-2 text-xl fa-solid fa-user"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute bottom-[-46px] left-0 bg-white rounded-md shadow-md">
                  <button
                    onClick={signOut}
                    className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                  >
                    <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="text-emerald-200 flex items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="mr-2 text-xl fa-solid fa-cart-shopping"></i>
              cart
            </button>
          </div>
          <button
            className="flex sm:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars text-4xl text-emerald-400" />
          </button>
        </div>
      </nav>

      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal setCartOpen={setCartOpen} />
      </ModalWrapper>
      <ModalWrapper onCloseClick={() => setMobileMenuOpen(false)} isOpen={mobileMenuOpen}>
        <MobileMenuModal
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        ></MobileMenuModal>
      </ModalWrapper>
    </>
  );
};

export default NavBar;
