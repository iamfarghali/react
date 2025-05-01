import { useContext } from "react";
import { ToasterContext } from "./ToasterProvider";

export function useToast() {
  return useContext(ToasterContext);
}
