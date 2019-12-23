import { Measurement } from "./measurement";
import { Meter } from "./meter";
import { Statistic } from "./statistic";

export abstract class Gauge extends Meter {
  abstract value: number;

  get measure(): Iterable<Measurement> {
    return [new Measurement(() => this.value, Statistic.VALUE)];
  }
}
