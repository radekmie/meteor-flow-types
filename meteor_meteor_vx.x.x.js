declare class Meteor$AppCache {
  config(options: {
    _disableSizeCheck?: boolean,
    browsers?: string[],
    onlineOnly?: string[],
    [string]: boolean
  }): void;
}

declare class Meteor$ConnectionHandle {
  clientAddress: string;
  close(): void;
  httpHeaders: {[string]: string};
  id: string;
  onClose(fn: () => mixed): void;
}

declare class Meteor$Meteor {
  _debug: (...args: mixed[]) => void;
  AppCache: Meteor$AppCache;
  Error: typeof Meteor$Error;
  absoluteUrl(
    path?: string,
    options?: {replaceLocalhost?: boolean, rootUrl?: string, secure?: boolean}
  ): string;
  apply<T>(
    name: string,
    args: $ReadOnlyArray<mixed>,
    options?: ?$Shape<{
      wait: boolean,
      onResultReceived: ((Error | Meteor$Error, void) => mixed) &
        ((void, T) => mixed),
      noRetry: boolean,
      throwStubExceptions: boolean
    }>,
    callback?: ((Error | Meteor$Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  bindEnvironment<T: () => mixed>(
    fn: T,
    onException?: string | (Error => mixed),
    context?: mixed
  ): T;
  call<T, A1, A2>(
    method: string,
    arg1: A1,
    arg2: A2,
    callback?: ((Error | Meteor$Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  call<T, A1>(
    method: string,
    arg1: A1,
    callback?: ((Error | Meteor$Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  call<T>(
    method: string,
    callback?: ((Error | Meteor$Error, void) => mixed) & ((void, T) => mixed)
  ): void;
  defer(fn: () => mixed): void;
  disconnect(): void;
  isClient: boolean;
  isCordova: boolean;
  isDevelopment: boolean;
  isProduction: boolean;
  isServer: boolean;
  loginWithFacebook(
    options?: ?$Shape<{
      requestPermissions: $ReadOnlyArray<string>,
      requestOfflineToken: boolean,
      loginUrlParameters: {},
      loginHint: string,
      loginStyle: string,
      redirectUrl: string,
      auth_type: string
    }>,
    callback?: (?(Error | Meteor$Error)) => mixed
  ): void;
  loginWithGoogle(
    options?: ?$Shape<{
      requestPermissions: $ReadOnlyArray<string>,
      requestOfflineToken: boolean,
      loginUrlParameters: {},
      loginHint: string,
      loginStyle: string,
      redirectUrl: string
    }>,
    callback?: (?(Error | Meteor$Error)) => mixed
  ): void;
  loginWithPassword(
    user: string | {|email: string|} | {|id: string|} | {|username: string|},
    password: string,
    callback?: (?(Error | Meteor$Error)) => mixed
  ): void;
  logout(callback?: (?(Error | Meteor$Error)) => mixed): void;
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

  subscribe(name: string): Meteor$SubscriptionHandle;
  // Define all subscription that need a parameter here, e. g.
  // subscribe(name: 'posts', limit: number): Meteor$SubscriptionHandle;

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
  message: string;
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
  services?: {
    facebook?: {id: string, accessToken: string},
    google?: {accessToken: string}
  },
  username?: string,
  [field: string]: mixed
};

declare module 'meteor/meteor' {
  declare module.exports: {
    Meteor: Meteor$Meteor
  };
}
