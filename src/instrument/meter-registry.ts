import { Counter, registerCounter } from "./counter";
import { Gauge } from "./gauge";
import { MeterId } from "./meter";
import { Tag } from "./tag";
import { Tags } from "./tags";

export abstract class MeterRegistry {
  protected abstract newGauge<T>(
    id: MeterId,
    obj: T | undefined,
    valueFunction: (value: T) => number
  ): Gauge;

  protected abstract newCounter(id: MeterId): Counter;

  counterById(id: MeterId): Counter {
    return this.registerMeterIfNecessary(
      Counter,
      id,
      this.newCounter.bind(this),
      (id: MeterId) => new NoopCounter(id)
    );
  }

  counter(name: string, ...tags: Array<Tag | [string, string]>): Counter {
    return registerCounter({ name, tags: Tags.of(...tags) }, this);
  }
}
