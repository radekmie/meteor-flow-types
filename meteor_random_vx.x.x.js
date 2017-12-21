declare class Meteor$Random {
  choice<T>(array: T[]): T;
  fraction(): number;
  hexString(length: number): string;
  id(length?: number): string;
  secret(length?: number): string;
}

declare module 'meteor/random' {
  declare module.exports: {
    Random: Meteor$Random
  };
}
