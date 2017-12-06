declare class Meteor$Mongo {
  Collection: typeof Meteor$Mongo$Collection;
}

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
  insertMany(docs: T[]): Promise<{}>;
  initializeUnorderedMeteor$Mongo$BulkOp(): Meteor$Mongo$BulkOp;
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
