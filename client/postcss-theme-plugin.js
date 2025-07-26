const postcss = require('postcss');

module.exports = () => {
  return {
    postcssPlugin: 'postcss-theme-plugin',
    AtRule: {
      theme: (atRule) => {
        const rootRule = postcss.rule({ selector: ':root' });
        atRule.walkDecls((decl) => {
          rootRule.append(decl.clone());
        });
        atRule.replaceWith(rootRule);
      },
    },
  };
};

module.exports.postcss = true;