declare class Aldeed$Mongo$Collection2<T> extends Meteor$Mongo$Collection<T> {
  attachSchema(
    schema: SimpleSchema,
    options?: $Shape<{
      selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
      transform: boolean
    }>
  ): void;
  simpleSchema: () => SimpleSchema;
}

declare class Aldeed$Mongo {
  Collection: typeof Aldeed$Mongo$Collection2;
  Cursor: typeof Meteor$Mongo$Cursor;
}

declare module 'meteor/aldeed:collection2' {
  declare module.exports: {
    Mongo: Aldeed$Mongo,
    MongoInternals: Meteor$MongoInternals
  };
}
