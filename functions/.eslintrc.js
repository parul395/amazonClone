module.exports = {rules: {'max-len': ['error', {code: 120}],
quotes: ['error', 'double']},
  root: true,
  env: {es6: true, node: true},
  extends: ['eslint:recommended', 'google'],
 parser: 'babel-eslint'};
