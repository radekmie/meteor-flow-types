// TODO: This should be extracted.
import type { Server } from "http";

class npm$connect$IncomingMessage extends http$IncomingMessage {
  originalUrl: string;
}

class npm$connect$ServerResponse extends http$ServerResponse {}

type npm$connect$handle =
  | ((
      req: npm$connect$IncomingMessage,
      res: npm$connect$ServerResponse,
      next: (?Error) => void
    ) => void)
  | ((
      error: Error,
      req: npm$connect$IncomingMessage,
      res: npm$connect$ServerResponse,
      next: (?Error) => void
    ) => void);

declare class npm$connect {
  route: string;
  stack: { handle: npm$connect$handle, route: string }[];
  use(route: string, handle: npm$connect$handle): npm$connect;
  use(handle: npm$connect$handle): npm$connect;
}

declare class Meteor$WebApp {
  addHtmlAttributeHook(fn: (Meteor$WebApp$Request) => { [string]: string }): void;
  connectApp: npm$connect;
  connectHandlers: npm$connect;
  httpServer: Server;
  rawConnectHandlers: npm$connect;
}

declare type Meteor$WebApp$Request = {
  browser: {
    major: number,
    minor: number,
    name: string,
    patch: number,
  },
  cookies: { [string]: string },
  dynamicBody: string,
  dynamicHead: string,
  headers: { [string]: string },
  url: {
    pathname: string,
  },
};

declare class Meteor$WebAppInternals {
  registerBoilerplateDataCallback(
    key: string,
    fn: (
      Meteor$WebApp$Request,
      {
        dynamicBody: string,
        dynamicHead: string,
        headers?: { [string]: string },
        statusCode?: number,
        [string]: string,
      },
      string
    ) => boolean
  ): void;
  staticFiles: {
    [string]: {
      absolutePath: string,
      cacheable: boolean,
      content?: string,
      hash?: string,
      sourceMapUrl?: string,
      type?: string,
    },
  };
}

declare module "meteor/webapp" {
  declare module.exports: {
    WebApp: Meteor$WebApp,
    WebAppInternals: Meteor$WebAppInternals,
  };
}
