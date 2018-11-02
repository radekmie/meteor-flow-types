declare type Meteor$Accounts$SuccessfulLoginAttempt = {|
  allowed: true,
  connection: Meteor$ConnectionHandle,
  methodArguments: mixed[],
  methodName: string,
  type: string,
  user: Meteor$User
|}

declare type Meteor$Accounts$FailedLoginAttempt = {|
  allowed: false,
  connection: Meteor$ConnectionHandle,
  error: Meteor$Error | Error,
  methodArguments: mixed[],
  methodName: string,
  type: string,
  user?: Meteor$User
|}

declare class Meteor$Accounts {
  _storedLoginToken(): string;
  _storedLoginTokenExpires(): string;
  _storedUserId(): string;
  callLoginMethod(options: {
    methodName?: string,
    methodArguments?: mixed[],
    userCallback: (?Meteor$Error) => void,
  }): void;
  config(options: {
    ambiguousErrorMessages?: boolean,
    forbidClientAccountCreation?: boolean,
    loginExpirationInDays?: number,
    oauthSecretKey?: string,
    passwordEnrollTokenExpirationInDays?: number,
    passwordResetTokenExpirationInDays?: number,
    restrictCreationByEmailDomain?: string | (string => ?boolean),
    sendVerificationEmail?: boolean
  }): void;
  findUserByEmail(email: string): null | Meteor$User;
  forgotPassword(options: {email: string}, fn?: (?Error) => void): void;
  loggingIn(): boolean;
  loginServicesConfigured(): boolean;
  logout(fn?: (?Error) => void): void;
  logoutOtherClients(fn?: (?Error) => void): void;
  onCreateUser(
    fn: (options: Meteor$User, user: Meteor$User) => Meteor$User
  ): void;
  onEmailVerificationLink(fn: (token: string, done: () => void) => void): void;
  onLogin(fn: (Meteor$Accounts$SuccessfulLoginAttempt) => void): {stop(): void};
  onLoginFailure(fn: (Meteor$Accounts$FailedLoginAttempt) => void): {stop(): void};
  onLogout(
    fn: (user: Meteor$User, connection: Meteor$ConnectionHandle) => void
  ): void;
  removeDefaultRateLimit: () => void;
  resetPassword(token: string, password: string, fn?: (?Meteor$Error) => void): void;
  registerLoginHandler(name: string, fn: (options: { [string]: mixed }) => ?{ userId: string }): void;
  sendEnrollmentEmail(
    userId: string,
    email?: string,
    extraTokenData?: {}
  ): {
    email: string,
    user: Meteor$User,
    token: string,
    url: string,
    options: {}
  };
  sendResetPasswordEmail(
    userId: string,
    email?: string,
    extraTokenData?: {}
  ): {
    email: string,
    user: Meteor$User,
    token: string,
    url: string,
    options: {}
  };
  sendVerificationEmail(
    userId: string,
    email?: string,
    extraTokenData?: {}
  ): {
    email: string,
    user: Meteor$User,
    token: string,
    url: string,
    options: {}
  };
  urls: {
    enrollAccount: (token: string) => string,
    resetPassword: (token: string) => string,
    verifyEmail: (token: string) => string
  };
  validateLoginAttempt(
    fn: (Meteor$Accounts$SuccessfulLoginAttempt | Meteor$Accounts$FailedLoginAttempt) => boolean
  ): {stop(): void};
}

declare module 'meteor/accounts-base' {
  declare module.exports: {
    Accounts: Meteor$Accounts
  };
}
