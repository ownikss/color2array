// @flow
/* ::
 import type { ColorCartage } from './types';
 */
export default function parseRgb(rgb /* : string */) /* : ColorCartage */ {
  const regExpr = rgb.indexOf('rgba(') === 0 ? /rgba\((.*)\)/ : /rgb\((.*)\)/;
  const matchRes = rgb.match(regExpr);
  if (matchRes) {
    const rgbNumbers = matchRes[1].split(',').map(i => Number(i));
    const [r, g, b, a = 1] = rgbNumbers;
    return [r, g, b, a];
  }
  return [0, 0, 0, 0];
}
