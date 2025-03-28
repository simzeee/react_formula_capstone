import { useContext } from "react";
import SessionContext from "context/sessionContext";
import { motion } from "framer-motion";

const MobileMenuModal = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);
  return (
    <motion.div
      className="bg-emerald-800 text-emerald-200 flex flex-col items-start pt-12 pr-12 pb-6 rounded-bl-lg shadow-md"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-user" />
        {username}
      </div>
      <button onClick={signOut} className="px-8 py-4">
        <i className="mr-2 text-2xl fa-solid fa-arrow-right-from-bracket" />
        sign out
      </button>
      <button className="px-8 py-4" onClick={onCartOpenClick}>
        <i className="mr-2 text-2xl fa-solid fa-cart-shopping" />
        cart
      </button>
    </motion.div>
  );
};

export default MobileMenuModal;
