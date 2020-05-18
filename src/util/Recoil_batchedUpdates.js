const React = require("React");

const batchedUpdates = typeof window === "undefined" ? require("ReactNative").unstable_batchedUpdates : require("ReactDOM").unstable_batchedUpdates;

module.exports = batchedUpdates;