import { Counter } from "../counter";

export function DefaultCounter(name: string): Counter {
  let count = 0;

  return {
    increment() {
      count++;
    }
  };
}
