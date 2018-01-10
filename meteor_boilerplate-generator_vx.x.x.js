declare class Meteor$Boilerplate {
  toHTML(extraData?: {}): string;
  toHTMLAsync(extraData?: {}): Promise<string>;
  toHTMLStream(extraData?: {}): stream$Duplex;
}

declare module 'meteor/boilerplate-generator' {
  declare module.exports: {
    Boilerplate: typeof Meteor$Boilerplate
  };
}
