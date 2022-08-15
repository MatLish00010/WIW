module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@myapp': './app',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  };
};
