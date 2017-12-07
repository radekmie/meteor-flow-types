declare class Meteor$Meteor {
  Error: typeof Meteor$Error;
  absoluteUrl(
    path?: string,
    options?: {replaceLocalhost?: boolean, rootUrl?: string, secure?: boolean}
  ): string;
  bindEnvironment<T: () => mixed>(
    fn: T,
    onException?: string | (Error => mixed),
    context?: mixed
  ): T;
  call<T, A1, A2>(
    method: string,
    arg1: A1,
    arg2: A2,
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  call<T, A1>(
    method: string,
    arg1: A1,
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  call<T>(
    method: string,
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  defer(fn: () => mixed): void;
  isClient: boolean;
  isCordova: boolean;
  isProduction: boolean;
  isServer: boolean;
  loginWithPassword(
    user: string | {|email: string|} | {|id: string|} | {|username: string|},
    password: string,
    callback?: (?Error) => mixed
  ): void;
  logout(callback?: (?Error) => mixed): void;
  methods({[name: string]: (...args: mixed[]) => mixed}): void;
  publish(name: string, publication: (...args: mixed[]) => mixed): void;
  publish({[name: string]: (...args: mixed[]) => mixed}): void;
  reconnect(): void;
  release: string;
  setInterval(fn: () => mixed, delay?: number): void;
  setTimeout(fn: () => mixed, delay?: number): void;
  settings: {public: {[setting: string]: mixed}, [setting: string]: mixed};
  startup(callback: () => mixed): void;
  status(): {|
    connected: boolean,
    status: 'connected' | 'connecting' | 'failed' | 'offline' | 'waiting',
    retryCount: number,
    retryTime?: number,
    reason?: string
  |};
  subscribe(name: string, ...args: mixed[]): Meteor$SubscriptionHandle;
  user(): ?Meteor$User;
  userId(): ?string;
  users: Meteor$Mongo$Collection<Meteor$User>;
  wrapAsync<T, A1, A2>(
    arg1: A1,
    arg2: A2,
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): (A1, A2) => T;
  wrapAsync<T, A1>(
    arg1: A1,
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): A1 => T;
  wrapAsync<T>(
    callback?: ((Error, void) => mixed) & ((void, T) => mixed)
  ): () => T;
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

declare class Meteor$Mongo$Collection<T> {
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
  allow<U>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: U) => boolean,
    remove?: (userId: string, doc: U) => boolean,
    transform?: T => U,
    update?: (
      userId: string,
      doc: U,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  constructor(name: string): void;
  deny<U>(options: {
    fetch?: string | string[],
    insert?: (userId: string, doc: U) => boolean,
    remove?: (userId: string, doc: U) => boolean,
    transform?: T => U,
    update?: (
      userId: string,
      doc: U,
      fieldNames: string[],
      modifier: Meteor$Mongo$Modifier
    ) => boolean
  }): boolean;
  find<U>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: {
      fields?: Meteor$Mongo$FieldSpecifier,
      limit?: number,
      reactive?: boolean,
      skip?: number,
      sort?: Meteor$Mongo$SortSpecifier,
      transform?: T => U
    }
  ): Meteor$Mongo$Cursor<U>;
  findOne<U>(
    selector?: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
    options?: {
      fields?: Meteor$Mongo$FieldSpecifier,
      limit?: number,
      reactive?: boolean,
      skip?: number,
      sort?: Meteor$Mongo$SortSpecifier,
      transform?: T => U
    }
  ): ?U;
  insert(doc: T): string;
  insert(
    doc: T,
    callback: ((Error, void) => mixed) & ((void, string) => mixed)
  ): void;
  rawCollection(): Meteor$Mongo$RawCollection<T>;
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

declare class Meteor$Mongo$Cursor<T> {
  count(): number;
  fetch(): T[];
  forEach((T) => mixed): void;
  map<U>((T) => U): U[];
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

declare class Meteor$Error {
  constructor(error: string | number, reason?: string, details?: string): void;
  details?: string;
  error: string | number;
  reason?: string;
}

declare class Meteor$SubscriptionHandle {
  ready(): boolean;
  stop(): void;
}

declare type Meteor$User = {
  _id: string,
  createdAt?: number,
  emails?: {address: string, verified?: boolean}[],
  profile?: mixed,
  services?: mixed,
  username?: string,
  [field: string]: mixed
};

declare module 'meteor/meteor' {
  declare module.exports: {
    Meteor: Meteor$Meteor
  };
}
