declare class Meteor$DDPRateLimiter {
  addRule(
    matcher: Meteor$DDPRateLimiter$Matcher,
    numRequests?: number,
    timeInterval?: number,
    callback?: (
      checkResult: {
        allowed: boolean,
        timeToReset: number,
        numInvocationsLeft: number
      },
      ruleInput: {
        type: 'method' | 'subscription',
        name: string,
        userId: string,
        connectionId: string,
        clientAddress: string
      }
    ) => mixed
  ): string;
  removeRule(id: string): boolean;
  setErrorMessage(message: string | (({timeToReset: number}) => string)): void;
}

declare type Meteor$DDPRateLimiter$Matcher = {
  type?:
    | ('method' | 'subscription')
    | ((type: 'method' | 'subscription') => boolean),
  name?: string | ((name: string) => boolean),
  userId?: string | ((userId: string) => boolean),
  connectionId?: string | ((connectionId: string) => boolean),
  clientAddress?: string | ((clientAddress: string) => boolean)
};

declare module 'meteor/ddp-rate-limiter' {
  declare module.exports: {
    DDPRateLimiter: Meteor$DDPRateLimiter
  };
}
