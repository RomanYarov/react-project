module.exports = (env, options) => {
  const ENV = options.mode ? options.mode : 'development';
  
  console.log('Building "' + ENV + '" bundle.');

  return require('./config/' + ENV + '.js');
};