declare class Meteor$AccountsPassword extends Meteor$Accounts {
  _checkPassword(
    user: {_id: string},
    password: string | {|algorithm: string, digest: string|}
  ): {|error?: Meteor$Error, userId: string|};
  _hashPassword(password: string): {|algorithm: string, digest: string|};
  addEmail(userId: string, email: string, verified?: boolean): void;
  createUser(
    options: {
      email?: string,
      password: string | {|algorithm: string, digest: string|},
      profile?: {},
      username?: string
    },
    callback?: (?Error) => mixed
  ): void;
  emailTemplates: {
    enrollAccount: {
      subject: (user: Meteor$User) => string,
      text: (user: Meteor$User, url: string) => string
    },
    from: string,
    resetPassword: {
      subject: (user: Meteor$User) => string,
      text: (user: Meteor$User, url: string) => string
    },
    siteName: string,
    verifyEmail: {
      subject: (user: Meteor$User) => string,
      text: (user: Meteor$User, url: string) => string
    }
  };
  setPassword(
    userId: string,
    newPassword: string | {|algorithm: string, digest: string|},
    options?: {|logout?: boolean|}
  ): void;
  verifyEmail(token: string, callback?: (?Error) => mixed): void;
}

declare module 'meteor/accounts-base' {
  declare module.exports: {
    Accounts: Meteor$AccountsPassword
  };
}
