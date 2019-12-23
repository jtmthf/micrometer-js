import { Comparable } from "../lang/comparable";

export class Tag implements Comparable<Tag> {
  private constructor(
    public readonly key: string,
    public readonly value: string
  ) {}

  static of(key: string, value: string) {
    return new Tag(key, value);
  }

  compareTo(other: Tag) {
    return this.key < other.key ? -1 : this.key > other.key ? 1 : 0;
  }
}
