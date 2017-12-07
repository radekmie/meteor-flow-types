declare class Meteor$Tracker {
  active: boolean;
  afterFlush(callback: () => mixed): void;
  autorun(
    fn: (computation: Meteor$Tracker$Computation) => void,
    options?: {onError?: Error => mixed}
  ): Meteor$Tracker$Computation;
  currentComputation: null | Meteor$Tracker$Computation;
}

declare class Meteor$Tracker$Computation {
  firstRun: boolean;
  invalidate(): void;
  invalidated: boolean;
  onInvalidate(fn: (Meteor$Tracker$Computation) => mixed): void;
  onStop(fn: (Meteor$Tracker$Computation) => mixed): void;
  stop(): void;
  stopped: boolean;
}

declare class Meteor$Tracker$Dependency {
  changed(): void;
  depend(fromComputation?: Meteor$Tracker$Computation): boolean;
  hasDependents(): boolean;
}

declare module 'meteor/tracker' {
  declare module.exports: {
    Tracker: Meteor$Tracker
  };
}
