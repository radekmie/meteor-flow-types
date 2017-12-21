declare class Meteor$DDPRateLimiter {
  setErrorMessage(message: string | (({timeToReset: number}) => string)): void;
}

declare module 'meteor/ddp-rate-limiter' {
  declare module.exports: {
    DDPRateLimiter: Meteor$DDPRateLimiter
  };
}
