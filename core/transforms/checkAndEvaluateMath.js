const { Parser } = require('expr-eval');
const parser = new Parser();

function checkAndEvaluateMath(expr) {
  try {
    parser.evaluate(expr);
    return +parser.evaluate(expr).toFixed(3);
  } catch (ex) {
    return expr;
  }
}
