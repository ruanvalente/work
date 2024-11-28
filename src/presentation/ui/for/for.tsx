import { ReactNode } from "react";

interface ForProps<T> {
  each: T[];
  render: (item: T, index: number) => ReactNode;
}

export function For<T>({ each, render }: ForProps<T>) {
  return <>{each.map((item, index) => render(item, index))}</>;
}
