// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
