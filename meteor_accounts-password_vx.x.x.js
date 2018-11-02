declare class Meteor$AccountsPassword extends Meteor$Accounts {
  _checkPassword(
    user: {_id: string},
    password: string | {|algorithm: string, digest: string|}
  ): {|error?: Meteor$Error, userId: string|};
  _hashPassword(password: string): {|algorithm: string, digest: string|};
  addEmail(userId: string, email: string, verified?: boolean): void;
  changePassword(
    oldPassword: string,
    newPassword: string,
    callback?: (?Error) => mixed
  ): void;
  createUser(
    options: Object,
    callback?: (?Error) => mixed
  ): string;
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
  generateResetToken(userId: string, email?: string, reason?: string): {
    email: string, user: Meteor$User, token: string
  };
  insertUserDoc(user: Object, profile: Object): string;
  removeEmail(userId: string, email: string): void;
  setPassword(
    userId: string,
    newPassword: string | {|algorithm: string, digest: string|},
    options?: {|logout?: boolean|}
  ): void;
  verifyEmail(token: string, callback?: (?Meteor$Error) => mixed): void;
}

declare module 'meteor/accounts-base' {
  declare module.exports: {
    Accounts: Meteor$AccountsPassword
  };
}
