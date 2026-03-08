"use client";

import { useMemo, useState } from "react";
import { StatusContext } from "@/contexts/status.context";
import { Status } from "@/types/status.type";

export default function StatusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [status, setStatus] = useState<Status | undefined>(undefined);

  return (
    <StatusContext value={{ status, setStatus }}>{children}</StatusContext>
  );
}
