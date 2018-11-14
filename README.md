### :zap: Meteor Flow types :zap:

See [discussion](https://forums.meteor.com/t/work-in-progress-flow-types/40978).


### Usage

1. Clone into your `flow-typed` directory
2. Remove `package.json` and `package-lock.json`
3. Update `.flowconfig` (optional):
```
[ignore]
.*/.meteor/.*\.json
.*/.npm/.*\.json

[options]
module.name_mapper='^\/\(.*\)$' -> '<PROJECT_ROOT>/\1'
module.name_mapper='^meteor\/\(.*\):\(.*\)$' -> '<PROJECT_ROOT>/.meteor/local/build/programs/server/packages/\1_\2'
module.name_mapper='^meteor\/\(.*\):\(.*\)$' -> '<PROJECT_ROOT>/.meteor/local/build/programs/web.browser/packages/\1_\2'
module.name_mapper='^meteor\/\(.*\)$' -> '<PROJECT_ROOT>/.meteor/local/build/programs/server/packages/\1'
module.name_mapper='^meteor\/\(.*\)$' -> '<PROJECT_ROOT>/.meteor/local/build/programs/web.browser/packages/\1'
```

#### aldeed:collection2
1. In `meteor_mongo_vx.x.x.js` remove the part saying `declare module 'meteor/mongo' {…}`
2. In `meteor_aldeed:collection2_vx.x.x.js` replace `meteor/aldeed:collection2` with `meteor/mongo`.
