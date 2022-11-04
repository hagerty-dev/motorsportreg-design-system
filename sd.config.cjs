const { Parser } = require('expr-eval');
const { parseToRgba } = require('color2k');
const parser = new Parser();

const cssProp = ({ name, value }) => ` --${name}: ${value};\n`;
const transformDimension = (d) => (d.endsWith('px') ? d : d + 'px');
const transformShadow = (v) => `${v.x} ${v.y} ${v.blur} ${v.spread} ${v.color}`;
const transformLetterSpacing = (v) =>
  /%$/.test(v) ? `${v.slice(0, -1) / 100}em` : v;
const transformTypography = (p) =>
  `${p.fontWeight} ${p.fontSize}/${p.lineHeight} ${p.fontFamily}`;

const asCSSVar = (v) =>
  /^{.*}$/.test(v) ? `var(--${v.slice(1, -1).split('.').join('-')})` : v;
const typoClass = ({ name, original: { value } }) => `.${name} {
  font: var(--${name});
  letter-spacing: ${asCSSVar(value.letterSpacing)};
  text-transform: ${asCSSVar(value.textCase)};
  text-decoration: ${asCSSVar(value.textDecoration)};
}\n`;
const compoClass = ({ name, original: { value } }) =>
  `.${name} {\n\t${Object.entries(value)
    .map(propertyToCSSOutput)
    .join('\n\t')}\n}`;

const fontWeightMap = {
  thin: 100,
  extralight: 200,
  ultralight: 200,
  extraleicht: 200,
  light: 300,
  leicht: 300,
  normal: 400,
  regular: 400,
  buch: 400,
  medium: 500,
  kraeftig: 500,
  kräftig: 500,
  semibold: 600,
  demibold: 600,
  halbfett: 600,
  bold: 700,
  dreiviertelfett: 700,
  extrabold: 800,
  ultabold: 800,
  fett: 800,
  black: 900,
  heavy: 900,
  super: 900,
  extrafett: 900,
};
function transformFontWeights(value) {
  return `${fontWeightMap[value.toLowerCase()]}`;
}

function transformHEXRGBa(value) {
  if (value.startsWith('rgba(#')) {
    const [hex, alpha] = value.replace(')', '').split('rgba(').pop().split(',');
    const [r, g, b] = parseToRgba(hex);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  return value;
}

function propertyToCSSOutput([key, inputValue]) {
  let value = convertCompositionValue(key, inputValue);
  switch (key) {
    case 'paddingTop':
      return `padding-top: ${value};`;
    case 'paddingRight':
      return `padding-right: ${value};`;
    case 'paddingBottom':
      return `padding-bottom: ${value};`;
    case 'paddingLeft':
      return `padding-left: ${value};`;
    case 'spacing':
      return `padding: ${value};`;
    case 'itemSpacing':
      return `gap: ${value};`;
    case 'horizontalPadding':
      return `padding-left: ${value};\n  padding-right: ${value};`;
    case 'verticalPadding':
      return `padding-top: ${value};\n  padding-bottom: ${value};`;
    case 'fontSize':
      return `font-size: ${value};`;
    case 'lineHeight':
      return `line-height: ${value};`;
    case 'fontWeight':
      return `font-weight: ${value};`;
    case 'fontFamily':
      return `font-family: ${value};`;
    case 'letterSpacing':
      return `letter-spacing: ${value};`;
    case 'boxShadow':
      return `box-shadow: ${value};`;
    case 'typography':
      return `font: ${value};`;
    case 'fill':
      return `background-color: ${value};`;
    case 'border':
      return `border-color: ${value};`;
    case 'borderRadius':
      return `border-radius: ${value};`;
    case 'borderRadiusTopLeft':
      return `border-top-left-radius: ${value};`;
    case 'borderRadiusTopRight':
      return `border-top-right-radius: ${value};`;
    case 'borderRadiusBottomRight':
      return `border-bottom-right-radius: ${value};`;
    case 'borderRadiusBottomLeft':
      return `border-bottom-left-radius: ${value};`;
    case 'borderWidth':
      return `border-width: ${value};`;
    case 'borderWidthTop':
      return `border-top-width: ${value};`;
    case 'borderWidthRight':
      return `border-right-width: ${value};`;
    case 'borderWidthBottom':
      return `border-bottom-width: ${value};`;
    case 'borderWidthLeft':
      return `border-left-width: ${value};`;
    // Note: For border style we'd also need to set a border-style property to work correctly, which will be part of an upcoming release.
    // For now I'd suggest to have that in your composition token JSON even though we can't use it in Figma just yet.
    // Or keep this following line which hard-codes it to solid.
    case 'borderStyle':
      return `border-style: solid;`;
  }
}

function convertCompositionValue(key, v) {
  if (v.startsWith('{') && v.endsWith('}')) return asCSSVar(v);
  // All used properties can be found here: https://github.com/six7/figma-tokens/blob/main/src/constants/Properties.ts
  switch (key) {
    case 'fontSize':
    case 'padding':
    case 'paddingTop':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingLeft':
    case 'itemSpacing':
    case 'horizontalPadding':
    case 'verticalPadding':
    case 'width':
    case 'height':
    case 'sizing':
    case 'borderRadius':
    case 'borderRadiusTopLeft':
    case 'borderRadiusTopRight':
    case 'borderRadiusBottomRight':
    case 'borderRadiusBottomLeft':
    case 'borderWidth':
    case 'borderWidthTop':
    case 'borderWidthRight':
    case 'borderWidthBottom':
    case 'borderWidthLeft':
      return transformDimension(v);
    case 'letterSpacing':
      return transformLetterSpacing(v);
    case 'fontWeight':
      return transformFontWeights(v);
    case 'color':
    case 'border':
      return transformHEXRGBa(v);
    case 'boxShadow':
      return transformShadow(v);
    case 'typography':
      return transformTypography(v);
  }
  return v;
}

module.exports = {
  source: ['sd-input/src/figma/**/*.json'],
  transform: {
    'typography/shorthand': {
      type: 'value',
      transitive: true,
      matcher: ({ type }) => type === 'typography',
      transformer: ({ original: { value } }) => transformTypography(value),
    },
    'shadow/shorthand': {
      type: 'value',
      transitive: true,
      matcher: ({ type }) => type === 'boxShadow',
      transformer: ({ original: { value } }) =>
        Array.isArray(value)
          ? value.map((it) => transformShadow(it)).join(', ')
          : transformShadow(value),
    },
    'size/px': {
      type: 'value',
      transitive: true,
      matcher: ({ type }) =>
        ['fontSizes', 'dimension', 'borderRadius', 'spacing'].includes(type),
      transformer: ({ value }) => transformDimension(value),
    },
    'size/letterspacing': {
      type: 'value',
      transitive: true,
      matcher: ({ type }) => type === 'letterSpacing',
      transformer: ({ value }) => transformLetterSpacing(value),
    },
    'type/fontWeight': {
      type: 'value',
      transitive: true,
      matcher: ({ type }) => type === 'fontWeights',
      transformer: ({ description }) => description,
    },
    'color/hexrgba': {
      type: 'value',
      transitive: true,
      matcher: ({ value }) =>
        typeof value === 'string' && value.startsWith('rgba(#'),
      transformer: ({ value }) => transformHEXRGBa(value),
    },
    resolveMath: {
      type: 'value',
      transitive: true,
      transformer: ({ value }) => {
        try {
          return `${+parser.evaluate(value).toFixed(3)}`;
        } catch (ex) {
          return `${value}`;
        }
      },
    },
  },
  format: {
    'css/variables': (c) => `:root{\n${c.allProperties.map(cssProp).join('')}}`,
    'css/compositionClasses': (c) => c.allProperties.map(compoClass).join(''),
    'css/typographyClasses': (c) => c.allProperties.map(typoClass).join(''),
  },
  platforms: {
    css: {
      prefix: 'msr',
      buildPath: 'tokens/',
      transforms: [
        'resolveMath',
        'size/px',
        'size/letterspacing',
        'type/fontWeight',
        'color/hexrgba',
        'typography/shorthand',
        'shadow/shorthand',
        'name/cti/kebab',
      ],
      files: [
        ...[
          // TODO should be sourced from `$metadata`
          'core',
          'semantic',
          'components/button',
          'components/forms',
          'components/alert',
          'components/tooltip',
          'components/avatar',
          'components/modal',
          'components/logo',
          'components/image',
          'components/menu',
          'components/pagination',
          'components/datepickers',
          'components/filters',
          'components/toggles',
        ].map((o) => ({
          destination: `${o}.css`,
          format: 'css/variables',
          filter: ({ filePath }) => filePath.endsWith(`/${o}.json`),
        })),
        {
          destination: `compositions.css`,
          format: 'css/compositionClasses',
          filter: ({ type }) => type === 'composition',
        },
        {
          destination: `base/typography-classes.css`,
          format: 'css/typographyClasses',
          filter: ({ type }) => type === 'typography',
        },
      ],
    },
  },
};
