import { Counter } from "./counter";
import { Gauge } from "./gauge";
import { Measurement } from "./measurement";
import { Tags } from "./tags";

export abstract class Meter {
  abstract readonly id: MeterId;
  abstract readonly measure: Iterable<Measurement>;

  match<T>(visitors: {
    visitGauge: (gauge: Gauge) => T;
    visitCounter: (counter: Counter) => T;
    visitMeter: (meter: Meter) => T;
  }): T {
    if (this instanceof Gauge) {
      return visitors.visitGauge(this);
    } else if (this instanceof Counter) {
      return visitors.visitCounter(this);
    } else {
      return visitors.visitMeter(this);
    }
  }
}

export enum MeterType {
  Counter,
  Gauge,
  LongTaskTimer,
  Timer,
  DistributionSummary,
  Other
}

export interface MeterId {
  readonly name: string;
  readonly tags: Tags;
  readonly type: MeterType;
  readonly syntheticAssociation?: MeterId;
  readonly description?: string;
  readonly baseUnit?: string;
}
