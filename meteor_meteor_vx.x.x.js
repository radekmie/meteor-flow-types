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
