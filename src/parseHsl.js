// @flow
import hslToRgb from './hsl2rgb';
/* ::
 import type { ColorCartage } from './types';
 */

export default function parseHsl(color /* : string */) /* : ColorCartage */ {
  const regexpr = color.indexOf('hsla(') === 0 ? /hsla\((.*)\)/ : /hsl\((.*)\)/;
  const matchRes = color.match(regexpr);
  let h = 0;
  let s = 0;
  let l = 0;
  if (matchRes) {
    // todo: cartage type
    const hsla /* : number[] */ = matchRes[1].split(',').map((i) => {
      const val = Number(i.replace('%', ''));
      if (i[i.length - 1] === '%') {
        return val / 100;
      }
      return val;
    });
    h = hsla[0];
    s = hsla[1];
    l = hsla[2];
    const a = typeof hsla[3] !== 'undefined' ? hsla[3] : 1;
    const [r, g, b] = hslToRgb(h, s, l);
    return [r, g, b, a];
  }
  return [0, 0, 0, 0];
}
