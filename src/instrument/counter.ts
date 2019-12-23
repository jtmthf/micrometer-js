import { Meter, MeterType } from "./meter";
import { MeterRegistry } from "./meter-registry";
import { Tags } from "./tags";

export abstract class Counter extends Meter {
  abstract count: number;

  abstract increment(amount?: number): void;
}

export interface CounterOptions {
  name: string;
  tags?: Tags;
  description?: string;
  baseUnit?: string;
}

export function registerCounter(
  { name, tags = Tags.empty(), description, baseUnit }: CounterOptions,
  registry: MeterRegistry
): Counter {
  return registry.counterById({
    name,
    tags,
    description,
    baseUnit,
    type: MeterType.Counter
  });
}
