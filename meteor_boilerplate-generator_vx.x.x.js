declare class Meteor$Boilerplate {
  toHTML(data: {}): stream$Duplex;
}

declare module 'meteor/boilerplate-generator' {
  declare module.exports: {
    Boilerplate: typeof Meteor$Boilerplate
  };
}
