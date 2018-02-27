import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via webpack. This take a moment...'.blue);
console.log(process.env.NODE_ENV);

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(e => console.log(e.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    return jsonStats.warnings.map(e => console.log(e.yellow));
  }
  console.log(`Webpack stats: ${stats}`);

  console.log('Your app has been compiled in production mode in /dist. Its ready to roll'.green);

  return 0;
});
