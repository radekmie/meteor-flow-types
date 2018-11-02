declare type SimpleSchema$ValidationError = {
  name: string,
  value: string,
  type: string
};

declare class SimpleSchema$Context {
  validate(Object): boolean;
  validationErrors(): SimpleSchema$ValidationError[];
  isValid(): boolean;
}

declare class SimpleSchema {
  constructor(
    schema: {[string]: mixed},
    options?: {
      requiredByDefault?: boolean
    }
  ): void;

  clean(Object): Object;
  extend(SimpleSchema): SimpleSchema;
  newContext(): SimpleSchema$Context;
  omit(...string[]): SimpleSchema;
  pick(...string[]): SimpleSchema;
  validate(Object): boolean;

  static debug: boolean;
  static oneOf(...{[string]: mixed}[]): SimpleSchema;
  static Integer: string;
  static RegEx: {
    Id: RegExp,
    EmailWithTLD: RegExp
  };
}

declare module 'simpl-schema' {
  declare export default typeof SimpleSchema
}
