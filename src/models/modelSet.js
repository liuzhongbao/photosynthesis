const context = require.context('./', false, /\.js$/);
export default context
  .keys()
  .filter(item => item != './modelSet.js')
  .map(key => context(key));
