import { Gauge } from "../gauge";
import { MeterId } from "../meter";
import { MeterRegistry } from "../meter-registry";

export class SimpleMeterRegistry extends MeterRegistry {
  protected newGauge<T>(
    id: MeterId,
    obj: T | undefined,
    valueFunction: (value: T) => number
  ): Gauge {
    throw new Error("Method not implemented.");
  }
}
