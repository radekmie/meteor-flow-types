declare class Meteor$Mongo {
  Collection: typeof Meteor$Mongo$Collection;
  Cursor: typeof Meteor$Mongo$Cursor;
}

declare class Meteor$Mongo$BulkOp {
  find(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector
  ): Meteor$Mongo$BulkOpHandle;
  execute(): Promise<{}>;
}

declare class Meteor$Mongo$BulkOpHandle {
  deleteMany(modifier: Meteor$Mongo$Modifier): void;
  deleteOne(modifier: Meteor$Mongo$Modifier): void;
  updateMany(modifier: Meteor$Mongo$Modifier): void;
  updateOne(modifier: Meteor$Mongo$Modifier): void;
}

declare type OptionalId<T> = {|
  ...$Exact<T>,
  _id: $PropertyType<T, '_id'> | null
|};

declare class Meteor$Mongo$Collection<BaseEntryT> {
  _ensureIndex(
    index: {[fieldPath: string]: -1 | 1 | boolean | string},
    options?: {|
      background?: boolean,
      default_language?: string,
      name?: string,
      partialFilterExpression?: Meteor$Mongo$Selector,
      sparse?: boolean,
      unique?: boolean,
      weights?: {}
    |}
  ): void;
  allow(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: BaseEntryT) => boolean,
    remove?: (userId: string, doc: BaseEntryT) => boolean,
    update?: (
      userId: string,
      doc: BaseEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  allow<TransformedEntryT>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: TransformedEntryT) => boolean,
    remove?: (userId: string, doc: TransformedEntryT) => boolean,
    transform?: BaseEntryT => TransformedEntryT,
    update?: (
      userId: string,
      doc: TransformedEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  constructor(name: string): void;
  deny(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: BaseEntryT) => boolean,
    remove?: (userId: string, doc: BaseEntryT) => boolean,
    update?: (
      userId: string,
      doc: BaseEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  deny<TransformedEntryT>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: TransformedEntryT) => boolean,
    remove?: (userId: string, doc: TransformedEntryT) => boolean,
    transform?: BaseEntryT => TransformedEntryT,
    update?: (
      userId: string,
      doc: TransformedEntryT,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  find(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: $Shape<{
      fields: Meteor$Mongo$FieldSpecifier,
      limit: number,
      reactive: boolean,
      skip: number,
      sort: Meteor$Mongo$SortSpecifier
    }>
  ): Meteor$Mongo$Cursor<BaseEntryT>;
  find<TransformedEntryT>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: $Shape<{
      fields: Meteor$Mongo$FieldSpecifier,
      limit: number,
      reactive: boolean,
      skip: number,
      sort: Meteor$Mongo$SortSpecifier,
      transform: BaseEntryT => TransformedEntryT
    }>
  ): Meteor$Mongo$Cursor<TransformedEntryT>;
  findOne(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?$Shape<{
      fields: Meteor$Mongo$FieldSpecifier,
      limit: number,
      reactive: boolean,
      skip: number,
      sort: Meteor$Mongo$SortSpecifier
    }>
  ): ?BaseEntryT;
  findOne<TransformedEntryT>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: ?$Shape<{
      fields: Meteor$Mongo$FieldSpecifier,
      limit: number,
      reactive: boolean,
      skip: number,
      sort: Meteor$Mongo$SortSpecifier,
      transform: BaseEntryT => TransformedEntryT
    }>
  ): ?TransformedEntryT;
  insert(doc: OptionalId<BaseEntryT>): string;
  insert(
    doc: OptionalId<BaseEntryT>,
    callback: ((Error, void) => mixed) & ((void, string) => mixed)
  ): void;
  rawCollection(): Meteor$Mongo$RawCollection<BaseEntryT>;
  remove(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector
  ): void;
  remove(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    callback: (?Error) => mixed
  ): void;
  update(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean, upsert?: boolean}
  ): number;
  update(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean, upsert?: boolean},
    callback: ((Error, void) => mixed) & ((void, number) => mixed)
  ): void;
  upsert(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean}
  ): {insertedId?: string, numberAffected: number};
  upsert(
    selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    modifier: Meteor$Mongo$Modifier,
    options?: {multi?: boolean},
    callback: ((Error, void) => mixed) &
      ((void, {insertedId?: string, numberAffected: number}) => mixed)
  ): void;
}

declare class Meteor$Mongo$Cursor<BaseEntryT> {
  count(): number;
  fetch(): BaseEntryT[];
  forEach((BaseEntryT) => mixed): void;
  map<TransformedEntryT>(
    (BaseEntryT) => TransformedEntryT
  ): TransformedEntryT[];
}

declare type Meteor$Mongo$FieldSpecifier = {
  [fieldPath: string]:
    | 0
    | 1
    | boolean
    | {|$elemMatch: Meteor$Mongo$Selector|}
    | {|$meta: 'textScore'|}
    | {|$slice: number | [number, number]|}
};

declare type Meteor$Mongo$Modifier = {
  [fieldPath: string]: mixed
};

declare class Meteor$Mongo$ObjectId {
  _str: string;
  constructor(hex: string): void;
}

declare class Meteor$Mongo$RawCollection<T> {
  bulkWrite(pipeline: {}[]): Promise<{}>;
  deleteMany(selector: Meteor$Mongo$Selector): Promise<{}>;
  distinct(field: string, query?: Meteor$Mongo$Selector): Promise<mixed[]>;
  insertMany(docs: T[]): Promise<{}>;
  initializeUnorderedBulkOp(): Meteor$Mongo$BulkOp;
  createIndex(
    keys: {[string]: 1 | -1},
    options?: {|
      name?: string,
      unique?: boolean
    |}
  ): void;
}

declare type Meteor$Mongo$Selector = {
  [fieldPath: string]: mixed
};

declare type Meteor$Mongo$SortSpecifier =
  | {|$natural: -1 | 1|}
  | {[fieldPath: string]: -1 | 1 | {|$meta: 'textScore'|}};

declare class Meteor$MongoInternals {
  NpmModules: {
    mongodb: {
      module: {
        ObjectId: typeof Meteor$Mongo$ObjectId
      }
    }
  };
}

declare module 'meteor/mongo' {
  declare module.exports: {
    Mongo: Meteor$Mongo,
    MongoInternals: Meteor$MongoInternals
  };
}
