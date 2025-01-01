import { useContext } from "react";
import { AuthContext } from "../context/Context";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Cant use this context out of it provider");
  }

  return context;
}
