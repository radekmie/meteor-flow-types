declare module 'meteor/minifier-js' {
  declare module.exports: {
    meteorJsMinify(code: string): {code: string}
  };
}
