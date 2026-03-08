import { useContext } from "react";
import { StatusContext } from "@/contexts/status.context";

export default function useStatus() {
  const statusContext = useContext(StatusContext);

  if (!statusContext) throw new Error("Context missing.");

  return statusContext;
}
