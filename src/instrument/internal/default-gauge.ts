import { Gauge } from "../gauge";
import { MeterId } from "../meter";

export class DefaultGauge<T> extends Gauge {
  constructor(
    public readonly id: MeterId,
    private readonly obj: T,
    private readonly func: (value: T) => number
  ) {
    super();
  }

  get value() {
    try {
      return this.func(this.obj);
    } catch {
      return NaN;
    }
  }
}
