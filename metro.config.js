const path = require('path');
const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'ttf'],
      sourceExts: [...sourceExts, 'svg', 'ttf'],
      extraNodeModules: {
        'react-native': path.resolve(__dirname, 'node_modules/react-native'),
      },
    },
  };
})();

