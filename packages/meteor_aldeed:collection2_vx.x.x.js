declare class Aldeed$Collection2<T> extends Meteor$Mongo$Collection<T> {
  attachSchema(
    schema: SimpleSchema,
    options?: $Shape<{
      selector: number | string | Meteor$Mongo$ObjectId | Meteor$Mongo$Selector,
      transform: boolean
    }>
  ): void;
  simpleSchema: () => SimpleSchema;
}
