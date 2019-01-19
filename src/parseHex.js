// @flow
/* ::
 import type { ColorCartage } from './types';
 */
function parse16Int(str /* : string */) /* : number */ {
  const value = str.length < 2 ? `${str}${str}` : str;
  return parseInt(value || 'ff', 16);
}

function getChannel(hex /* : string */, from /* : number */, channelLength /* : number */) /* : number */ {
  return parse16Int(hex.slice(from, from + channelLength));
}

export default function parseHex(hex /* : string */) /* : ColorCartage */ {
  const channelLength = hex.length > 5 ? 2 : 1;
  const r = getChannel(hex, 1, channelLength);
  const g = getChannel(hex, 1 + channelLength, channelLength);
  const b = getChannel(hex, 1 + (channelLength * 2), channelLength);
  const a = getChannel(hex, 1 + (channelLength * 3), channelLength) / 255;
  return [r, g, b, a];
}
