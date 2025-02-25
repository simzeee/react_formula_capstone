import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import * as userService from "services/user";
import SessionContext from "context/sessionContext";
import { jwtDecode } from "jwt-decode";
import PlantListPage from "pages/PlantListPage";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    userService.getSessionTokenStorage()
  );

  console.log("session token", sessionToken);
  // console.log(jwtDecode(sessionToken))

  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          setSessionToken(token);
          userService.setSessionTokenStorage(token);
        },
        signOut: () => {
          setSessionToken(null);
          userService.removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />}></Route>
          <Route path="/sign-up" element={<SignUpPage />}></Route>
          <Route path="/plants" element={<PlantListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
