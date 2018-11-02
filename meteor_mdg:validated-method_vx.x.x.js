declare class Meteor$ValidatedMethod<T, ResultT> {
  constructor({
    name: string,
    validate?: Object => mixed,
    run: T => ResultT
  }): void;
  call(args: T, fn?: (?Meteor$Error, ResultT) => mixed): ResultT;
  name: string;
  run(T, ...mixed[]): ResultT;
  validate(Object): mixed;

  schema: ?SimpleSchema;
}

declare module 'meteor/mdg:validated-method' {
  declare module.exports: {
    ValidatedMethod: typeof Meteor$ValidatedMethod
  };
}
