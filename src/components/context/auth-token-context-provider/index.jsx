import { createContext, useState } from "react";
import { useSelector } from "react-redux";
import useApi from "../../../hooks/useApi";

const initialValue = {};

export const AuthTokenContext = createContext(initialValue);

export default function AuthContextProvider(props) {
  const [token, setToken] = useState(null);
  const localStorageToken = localStorage.getItem("token");
  const userState = useSelector((state) => state.userState);
  const api = useApi();

  if (token === null && localStorageToken !== null) {
    setToken(localStorageToken);
  } else {
    localStorage.setItem("token", token);
  }

  if (token !== null && userState.userData === null) {
    api
      .get("user/appData")
      .then((res) => {
        console.log("responseee", res);
      })
      .catch((err) => {
        console.log("errorrr", err);
      });
  }

  const contextValue = { token, setToken };

  return (
    <AuthTokenContext.Provider value={contextValue}>
      {props.children}
    </AuthTokenContext.Provider>
  );
}
