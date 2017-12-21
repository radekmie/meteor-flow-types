declare class Meteor$Minimongo {
  Matcher: typeof Meteor$Minimongo$Matcher;
}

declare class Meteor$Minimongo$Matcher {
  constructor(selector: Meteor$Mongo$Selector, isUpdate?: boolean): void;
  documentMatches(document: {}): {result: boolean};
}

declare module 'meteor/minimongo' {
  declare module.exports: {
    Minimongo: Meteor$Minimongo
  };
}
