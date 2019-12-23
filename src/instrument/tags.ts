import { flow, sortBy, sortedUniqBy } from "lodash/fp";
import { Tag } from "./tag";

export class Tags implements Iterable<Tag> {
  private static readonly EMPTY = new Tags([]);

  private readonly tags: Tag[] = [];

  private constructor(tags: Tag[]) {
    this.tags = flow(
      sortBy((tag: Tag) => tag.key),
      sortedUniqBy(tag => tag.key)
    )(tags);
  }

  and(...tags: Array<Tag | [string, string]>): Tags {
    if (tags.length === 0) {
      return this;
    }
    return new Tags([...this.tags, ...Tags.of(...tags)]);
  }

  [Symbol.iterator](): IterableIterator<Tag> {
    return this.tags[Symbol.iterator]();
  }

  static of(...tags: Array<Tag | [string, string]>): Tags {
    return new Tags(
      tags.map(tag => (Array.isArray(tag) ? Tag.of(...tag) : tag))
    );
  }

  static empty() {
    return this.EMPTY;
  }
}
