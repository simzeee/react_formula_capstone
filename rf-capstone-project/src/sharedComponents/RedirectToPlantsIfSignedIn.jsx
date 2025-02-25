import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "context/sessionContext";

const RedirectToPlantsIfSignedIn = (props) => {
  const { username } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== null) {
      navigate("/plants");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return props.children;
};

export default RedirectToPlantsIfSignedIn;
