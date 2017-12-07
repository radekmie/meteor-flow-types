declare class Meteor$Match {
  Any: Meteor$Match$Pattern<mixed>;
  Error: mixed;
  Integer: Meteor$Match$Pattern<number>;
  Maybe<T>(pattern: Meteor$Match$Pattern<T>): Meteor$Match$Maybe<T>;
  ObjectIncluding<T>(pattern: {}): Meteor$Match$ObjectIncluding<T>;
  ObjectWithValues<T>(pattern: {}): Meteor$Match$ObjectWithValues<T>;
  OneOf<T>(...args: T[]): Meteor$Match$OneOf<T>;
  Optional<T>(pattern: Meteor$Match$Pattern<T>): Meteor$Match$Optional<T>;
  Where<T>(condition: (T) => mixed): Meteor$Match$Where<T>;
  test<T>(value: T, pattern: Meteor$Match$Pattern<T>): boolean;
}

declare class Meteor$Match$Maybe<T> {}

declare class Meteor$Match$ObjectIncluding<T> {}

declare class Meteor$Match$ObjectWithValues<T> {}

declare class Meteor$Match$OneOf<T> {}

declare class Meteor$Match$Optional<T> {}

declare class Meteor$Match$Where<T> {}

declare type Meteor$Match$Pattern<T, U = *> =
  | $ObjMap<T, () => Meteor$Match$Pattern<U>>
  | Class<Array<T>>
  | Class<Boolean>
  | Class<Number>
  | Class<Object>
  | Class<String>
  | Meteor$Match$Maybe<T>
  | Meteor$Match$ObjectIncluding<T>
  | Meteor$Match$ObjectWithValues<T>
  | Meteor$Match$OneOf<T>
  | Meteor$Match$Optional<T>
  | Meteor$Match$Where<T>
  | T;

declare module 'meteor/check' {
  declare module.exports: {
    Match: Meteor$Match,
    check<T>(value: T, pattern: Meteor$Match$Pattern<T>): void
  };
}
