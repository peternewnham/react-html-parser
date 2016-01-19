// require all test files
const testsContext = require.context('./test', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

// require all src files
const componentsContext = require.context('./src/', true, /\.js$/);
componentsContext.keys().forEach(componentsContext);