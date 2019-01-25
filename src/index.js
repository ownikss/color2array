// @flow
import colors from './colors.json';
import parseHex from './parseHex';
import parseHsl from './parseHsl';
import parseRgb from './parseRgb';
/* ::
import type { ColorCartage } from './types';
*/

export default function jsColorToArray(color /* : ColorCartage | string */) /* : ColorCartage */ {
  if (Array.isArray(color)) {
    return color;
  }
  if (colors[color]) {
    return jsColorToArray(colors[color]);
  }
  if (color.indexOf('rgb') === 0) {
    return parseRgb(color);
  } else if (color[0] === '#') {
    return parseHex(color);
  } else if (color.indexOf('hsl') === 0) {
    return parseHsl(color);
  }
  return [0, 0, 0, 0];
}
