module.exports = function (api) {
  api.cache(true);
  return {
    // babel-preset-expo applies the react-native-worklets plugin (used by
    // react-native-reanimated v4) automatically. Do not list it here as well.
    presets: ['babel-preset-expo'],
  };
};
