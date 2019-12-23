import { Comparable } from "./comparable";

export function sort<T extends Comparable<T>>(array: T[]) {
  array.sort((a, b) => a.compareTo(b));
}
