import { DefaultCounter } from "./internal/default-counter";
import { MeterRegistry } from "./meter-registry";

export function CompositeMeterRegistry(): MeterRegistry {
  const registries: MeterRegistry[] = [];

  return {
    counter(name: string) {
      const counter = DefaultCounter(name);
      registries.forEach();

      return counter;
    }
  };
}
