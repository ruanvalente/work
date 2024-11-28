import { ReactNode } from "react";

interface ConditionProps {
  when: boolean;
  children: ReactNode;
  else?: ReactNode
}

export function Condition({ when, children, else: elseContent }: ConditionProps) {
  if (when) return <>{children}</>

  return elseContent ? <>{elseContent}</> : null;
}
