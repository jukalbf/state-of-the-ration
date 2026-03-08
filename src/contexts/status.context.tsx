"use client";

import { createContext } from "react";
import { Status } from "@/types/status.type";

type StatusContextValue = {
  status: Status | undefined;
  setStatus: (status: Status) => void;
};

export const StatusContext = createContext<StatusContextValue | undefined>(
  undefined,
);
